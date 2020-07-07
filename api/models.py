from dataclasses import dataclass
from app import db


@dataclass
class did(db.Model):
    id: int
    name: str
    ipfshash: str

    id = db.Column(db.String(128), primary_key=True)
    name = db.Column(db.String(128))
    ipfshash = db.Column(db.String(128), nullable=False)
    creds = db.relationship('Cred', lazy=True, foreign_keys='Cred.cred_issued_from')
    creds_issued = db.relationship('Cred', foreign_keys='Cred.cred_issued_to')
    cred_requests = db.relationship('Request', foreign_keys='Request.request_to')

    def __repr__(self):
        return str(self.id)


@dataclass
class Cred(db.Model):
    id: int
    cred_name: str
    cred_description: str
    cred_status: str
    cred_issued_to: str
    cred_issued_from: str
    cred_validity: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cred_name = db.Column(db.String(128))
    cred_description = db.Column(db.String(128))
    cred_status = db.Column(db.String(128))
    cred_issued_to = db.Column(db.String(128), db.ForeignKey('did.id'),
                          nullable=False)
    cred_issued_from = db.Column(db.String(128), db.ForeignKey('did.id'),
                              nullable=False)
    cred_encrypted = db.Column(db.String(2048))
    cred_validity = db.Column(db.String(128))
    requests = db.relationship('Request', backref='cred', lazy=True)

    def __repr__(self):
        return str(self.id)


@dataclass
class Request(db.Model):
    request_from_name: str
    cred_name: str
    id: int
    request_from: str
    request_to: str
    cred_id: int
    request_status: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    request_from = db.Column(db.String(128), db.ForeignKey('did.id'),
                          nullable=False)
    request_to = db.Column(db.String(128), db.ForeignKey('did.id'),
                          nullable=False)
    cred_id = db.Column(db.Integer, db.ForeignKey('cred.id'), nullable=False)
    request_status = db.Column(db.String(128))

    def __repr__(self):
        return str(self.id)