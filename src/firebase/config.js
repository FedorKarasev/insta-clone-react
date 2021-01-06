import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtNey6CSqxeY8qs44QS0sPuos4vZPbWao",
    authDomain: "instagram-clone-react-3161b.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-3161b-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-3161b",
    storageBucket: "instagram-clone-react-3161b.appspot.com",
    messagingSenderId: "525456615469",
    appId: "1:525456615469:web:5eecdc87ca59e9c5b370a4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };