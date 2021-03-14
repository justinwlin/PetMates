import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAtDKvc_z18mfcdPVmYO8b2BJycPIrBkeg",
    authDomain: "petmates-e204b.firebaseapp.com",
    projectId: "petmates-e204b",
    storageBucket: "petmates-e204b.appspot.com",
    messagingSenderId: "962134902591",
    appId: "1:962134902591:web:7ae931a80ad3bbb026b58a"
};

//init firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };