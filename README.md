# Nucypher DID Immunity Passports

Immunity Passports are digital certification that could be given to people who've recovered from COVID-19 or recieved a vaccination to show they're immune from the disease for a period of time.

As quoted by Bill Gates asking for digital test certificates during a Reddit AMA last month: “Eventually we will have some digital certificates to show who has recovered or been tested recently or when we have a vaccine who has received it,” said Gates. 

These digital certificates would be issued by health care institutions but controlled by the user and shared in a peer-to-peer manner. This would allow people to return back to work, travel and other activites. 

The Identities of people and Issuing Authorities are managed by `Decentralised Identifiers or (DIDs)`. These will be completely free from the control of any single Organization and managed by the various authentication methods like Private Keys / Public Keys / Biometerics and can be stored on Blockchains like Ethereum and Hyperledger.

`NuCypher` plays a very crucial role in this since no Private Data should be kept on a DID in any form and being open DID can be accessed by anyone. So To keep user's data private while making sure that one can safely share and provide access to their COVID status in various scenarios like Jobs, Travel, Education etc. nucypher is being used. 

Any Organization who wants to access the COVID status of user generates a request using the DID of that user. This request can then be accepted by user by creating a Policy in the Name of Requesting Organization and thus giving permissions to view data.

This ensures that only trusted parties(Identified by Their DIDs) are being presented in an open and decentralised manner.

Along with User's COVID Certificates, DIDs can also be used to store other information like Travel History, Job Status and Even Contact Tracing Data where all of that can be secured by Nucypher's Proxy ReEncryption Techniques.

# Flow

1. User and Institutions will create their DIDs and enter their Associated data.
2. Institute will issue a certificate in the name of User by using his/her DID
3. User will be able to view the Certificates and share it using QR code.
4. Another institue will request for Certificate information from User
5. User Can grant or refuse the certificate access.
6. IF user grants the request institute can see the Credentials data.
7. User can then Revoke the access or keep sharing it.

## Sample DID - 

```
{
  "@context": "https://www.w3.org/ns/did/v1", 
  "id": "did:cred:1a1cae3e-bfa4-11ea-8341-f4d10855b531", 
  "publicKey": [
    {
      "controller": "did:cred:1a1cae3e-bfa4-11ea-8341-f4d10855b531", 
      "id": "did:cred:1a1cae3e-bfa4-11ea-8341-f4d10855b531#keys-1", 
      "publicKeyPem": "b'-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtKwVZxpfhdAd6sPYlh4u\\nuBdWe6HLJfY0FsK3ptvDw9+C0kH3wVnxN2IiMLRhUxhbSHhKY/L/hpHNLE3lee82\\n2UYfvm1KmzlezAjtwsIClW0jnouqSvjB2EjymS6s37VchFXVIwnQjetn0quabMb9\\nJEgdSfvuNyRJscGgbcB3zFeTSsUY3bhrgV/iAgUF/oqnY9BIg1T7g/v0idMmiY6L\\nN7ndtswkfpZMMAGt1IgI67UT/REI4WHO6YhD8jOXTq9Xqrb7cdljYcFmVdqSZCMN\\ntnhpksWMqEQN4STDW+Zon9VwU4TzkDJ9iQv0oJlIGRf6rtM3sufBWld16uBWgsPV\\nhQIDAQAB\\n-----END PUBLIC KEY-----'", 
      "type": "RSA"
    }
  ], 





  "service": [
    {
      "serviceEndpoint": "http://127.0.0.1:5000/get_creds/did:cred:1a1cae3e-bfa4-11ea-8341-f4d10855b531", 
      "type": "VerifiableCredentialService"
    }, 
    {
      "serviceEndpoint": "http://localhost:5151/encrypt_message", 
      "type": "EncryptMessageService"
    }, 
    {
      "serviceEndpoint": "http://localhost:8151/derive_policy_encrypting_key/", 
      "type": "PolicyCreatingService"
    }
  ]
}

```

# App Working Demo Video

https://youtu.be/W2b1iEug7X0

# Screenshots 

https://imgur.com/a/SIbkzA8
https://ibb.co/album/tpySMX

# Deployment

Steps to get started

    Clone Code repository in the local machine
    Install Python in local machine
    Install pipenv Once installation is completed it's time to create python virtual environment for flask api to start working

Follow these steps to activate virtual environment

    Activate virual environment by executing pipenv shell from the api folder
    Once activation is done run pip install -e . from the api
   
Configure Flask APP

    Run export FLASK_APP=app.py
    Run export FLASK_ENV=development 
    Before running flask app, make sure alice and bob nodes are up.

Setup Nucypher

    Clone nucypher code repo
    Activate virtual environment from nucypher folder
    Do pip install -e .
    Run ursula by running nucypher ursula run --dev --federated-only

Run Flask App

    Run flask app by running flask run
    Flask API will start running on port 5000

Run React App

    Navigate to app folder
    Run npm install
    Run npm start
