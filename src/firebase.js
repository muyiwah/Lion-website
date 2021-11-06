import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-FqmdsbibkTG1h3tsl_HzlZ73gmilPKI",
  authDomain: "courses-3c1c2.firebaseapp.com",
  dataBbseURL: "https://courses-3c1c2.firebaseapp.com",
  projectId: "courses-3c1c2",
  storageBucket: "courses-3c1c2.appspot.com",
  messagingSenderId: "249476710058",
  appId: "1:249476710058:web:6d786e1512eb2902119ad3"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export {auth, provider, db};