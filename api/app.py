import json
import uuid
import requests
import os
import subprocess
import time

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import ipfshttpclient
from Crypto.PublicKey import RSA

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)
client = ipfshttpclient.connect('/dns/ipfs.infura.io/tcp/5001/https')


from models import did, Cred, Request


@app.route('/')
def hello_world():
    # d = did(id='qweqsdweaasdasdsd', ipfshash='ertyuhgc')
    # db.session.add(d)
    # db.session.commit()
    # print(did.query.all())
    return 'Hello World!'


@app.route('/create_did', methods=['GET'])
def create_did():
    key = RSA.generate(2048)
    private_key = key.export_key()
    print(private_key)
    public_key = key.publickey().export_key(format='PEM')

    did_id = "did:cred:" + str(uuid.uuid1())
    did_doc = {
        "@context": "https://www.w3.org/ns/did/v1",
        "id": did_id,
        "publicKey": [{
            "id": did_id + "#keys-1",
            "type": "RSA",
            "controller": did_id,
            'publicKeyPem': str(public_key)
        }],
        "service": [
            {
                "type": "VerifiableCredentialService",
                "serviceEndpoint": "http://127.0.0.1:5000/get_creds/" + did_id
            },
            {
                "type": "EncryptMessageService",
                "serviceEndpoint": "http://localhost:5151/encrypt_message"
            },
            {
                "type": "PolicyCreatingService",
                "serviceEndpoint": "http://localhost:8151/derive_policy_encrypting_key/"
            },
            # {
            #     "type": "NucypherPublicKeys",
            #     "serviceEndpoint": "http://localhost:8151/public_keys"
            # }
            {
                "type": "NucypherPublicKeys",
                "serviceEndpoint": "http://localhost:11051/public_keys"
            }
        ]
    }

    ipfshash = client.add_json(did_doc)

    d = did(id=did_id, ipfshash=ipfshash)
    db.session.add(d)
    db.session.commit()

    return jsonify({'did': did_id, 'hash': ipfshash})


@app.route('/request_did_access', methods=['POST'])
def request_did_access():
    if request.method == "POST":
        data = json.loads(request.data)
        request_did = data['request_did']
        grant_to_did = data['grant_to_did']
        cred_id = data['cred_id']

        r = Request(request_from=grant_to_did, request_to=request_did, cred_id=cred_id, request_status="notGranted")
        db.session.add(r)
        db.session.commit()

        return jsonify({'status': 'Success'})


@app.route('/get_creds/<didid>', methods=['GET'])
def get_creds(didid):
    creds = Cred.query.filter_by(cred_issued_to=didid).all()
    for cred in creds:
        issued_by = cred.cred_issued_from
        d = did.query.get(issued_by)
        cred.cred_issued_from = d.name
    return jsonify(creds)


@app.route('/get_requests/<didid>', methods=['GET'])
def get_requests(didid):
    cred_requests = Request.query.filter_by(request_to=didid, request_status='notGranted').all()
    for req in cred_requests:
        request_from = req.request_from
        d = did.query.get(request_from)
        req.request_from_name = d.name
        c = Cred.query.get(req.cred_id)
        req.cred_name = c.cred_name
    return jsonify(cred_requests)


@app.route('/get_access_granted/<didid>', methods=['GET'])
def get_access_granted(didid):
    cred_requests = Request.query.filter_by(request_to=didid, request_status='Granted').all()
    for req in cred_requests:
        request_from = req.request_from
        d = did.query.get(request_from)
        req.request_from_name = d.name
        c = Cred.query.get(req.cred_id)
        req.cred_name = c.cred_name
    return jsonify(cred_requests)



@app.route('/issue_cred', methods=['POST'])
def issue_cred():
    if request.method == "POST":
        data = json.loads(request.data)
        issuer_did = data['issuer_did']
        cred_issues_to = data['cred_issues_to']
        cred_name = data['cred_name']
        cred_description = data['cred_description']
        cred_status = data['cred_status']
        cred_validity=data['cred_validity']

        d = did.query.get(cred_issues_to)
        ipfshash = d.ipfshash
        did_doc = client.cat(ipfshash)
        did_doc = json.loads(did_doc)

        print('id_Docs is the jojj',did_doc)

        print(did_doc['service'][1]['serviceEndpoint'])
        print(did_doc['service'][2]['serviceEndpoint']+"-".join(cred_name.split(' ')))

        resp = requests.post(did_doc['service'][2]['serviceEndpoint'] + "-".join(cred_name.split(' ')))
        print(resp.text)
        resp = resp.json()
        print(resp)
        policy_encrypting_key = resp['result']['policy_encrypting_key']

        subprocess.Popen(['nucypher', 'enrico', 'run', '--policy-encrypting-key', policy_encrypting_key, '--http-port', '5151'])
        time.sleep(5)

        message = {
            "message": str(cred_name + "---" + cred_description + "---" + cred_status)
        }

        resp_encrypt = requests.post(did_doc['service'][1]['serviceEndpoint'], data=json.dumps(message), headers={'Content-Type': 'application/json'})

        print(resp_encrypt.content)
        resp_encrypt = resp_encrypt.json()
        print('resp_encrypted json', resp_encrypt)

        message_kit = resp_encrypt['result']['message_kit']

        c = Cred(cred_name=cred_name, cred_description=cred_description, cred_status=cred_status, cred_issued_to=cred_issues_to, cred_issued_from=issuer_did, cred_encrypted=message_kit, cred_validity=cred_validity)
        db.session.add(c)
        db.session.commit()

        return jsonify({'status': 'Success'})


@app.route('/grant_did_access', methods=['POST'])
def grant_did_access():
    if request.method == 'POST':
        data = json.loads(request.data)
        grant_to_did = data['grant_to_did']
        cred_to_grant = data['cred_to_grant']
        print(grant_to_did, cred_to_grant)
        d = did.query.get(grant_to_did)
        ipfshash = d.ipfshash
        did_doc = client.cat(ipfshash)
        did_doc = json.loads(did_doc)

        print(did_doc)

        grant_public_keys_url = did_doc['service'][3]['serviceEndpoint']
        print(grant_public_keys_url)

        resp = requests.get(grant_public_keys_url)
        resp = resp.json()
        bob_encrypting_key = resp['result']['bob_encrypting_key']
        bob_verifying_key = resp['result']['bob_verifying_key']

        c = Cred.query.get(int(cred_to_grant))
        print(c)

        resp_grant = requests.put('http://localhost:8151/grant', data=json.dumps({
            "bob_verifying_key": bob_verifying_key,
            "bob_encrypting_key": bob_encrypting_key,
            "m": 1,
            "n": 1,
            "label": "-".join(c.cred_name.split(' ')),
            "expiration": "2030-02-19T12:56:26.976816"
        }))

        resp_grant = resp_grant.json()
        print(resp_grant)

        alice_verifying_key = resp_grant['result']['alice_verifying_key']
        policy_encrypting_key = resp_grant['result']['policy_encrypting_key']
        label = "-".join(c.cred_name.split(' '))
        encrypted_message = c.cred_encrypted

        respp = {
            'alice_verifying_key': alice_verifying_key,
            'policy_encrypting_key': policy_encrypting_key,
            'label': label,
            'encrypted_message': encrypted_message
        }

        r = Request.query.filter_by(cred_id=cred_to_grant, request_from=grant_to_did).first()
        print('THis is the request',r)
        r.request_status = 'Granted'
        db.session.commit()

        return jsonify(respp)


@app.route('/retrieve_did/<did_id>', methods=['GET'])
def retrieve_did(did_id):
    d = did.query.get(did_id)
    ipfshash = d.ipfshash
    did_doc = client.cat(ipfshash)
    did_doc = json.loads(did_doc)
    print(did_doc)
    return jsonify({'did_detail': d, 'did_doc': did_doc})


@app.route('/all_did', methods=['GET'])
def all_did():
    d = did.query.all()
    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=True)
