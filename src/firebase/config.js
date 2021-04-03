import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtDKvc_z18mfcdPVmYO8b2BJycPIrBkeg",
    authDomain: "petmates-e204b.firebaseapp.com",
    projectId: "petmates-e204b",
    storageBucket: "gs://petmates-e204b.appspot.com",
    appId: "1:962134902591:web:7ae931a80ad3bbb026b58a",
};

//init firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const petsdb = db.collection('pets');
const storesdb = db.collection('stores');
const usersdb = db.collection('users');
const imgstore = firebase.storage();


export {
    auth,
    db,
    petsdb,
    storesdb,
    usersdb,
    imgstore
};