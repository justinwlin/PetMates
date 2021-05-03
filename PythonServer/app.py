from flask import Flask
import pyrebase
import asyncio
from flask import request
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

config = {
    "apiKey": "AIzaSyAtDKvc_z18mfcdPVmYO8b2BJycPIrBkeg",
    "authDomain": "petmates-e204b.firebaseapp.com",
    "projectId": "petmates-e204b",
    "storageBucket": "petmates-e204b.appspot.com",
    "messagingSenderId": "962134902591",
    "appId": "1:962134902591:web:7ae931a80ad3bbb026b58a",
    "databaseURL": "https://petmates-e204b-default-rtdb.firebaseio.com/",
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()


@app.route('/')
def baseroute():
    return 'Hello, World!'


@app.route('/login', methods=['GET', 'POST'])
def login():
    data = request.json
    print(data)
    try:
        user = auth.sign_in_with_email_and_password(data["username"],
                                                    data["password"])
        return jsonify(user)
    except:
        print("An exception occurred")
        return 'False'


if __name__ == "__main__":
    app.run()