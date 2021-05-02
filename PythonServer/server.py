from flask import Flask
import pyrebase

app = Flask(__name__)

config = {
    "apiKey": "AIzaSyAtDKvc_z18mfcdPVmYO8b2BJycPIrBkeg",
    "authDomain": "petmates-e204b.firebaseapp.com",
    "projectId": "petmates-e204b",
    "storageBucket": "petmates-e204b.appspot.com",
    "messagingSenderId": "962134902591",
    "appId": "1:962134902591:web:7ae931a80ad3bbb026b58a"
}
firebase.pyrebase.initialize_app(config)
auth = firebase.auth()


@app.route('/')
def baseroute():
    return 'Hello, World!'


@app.route('/login')
def login():
    return 'Hello, World!'