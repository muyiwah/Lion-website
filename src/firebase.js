import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAV5xDBuG0gafcsJqeTLGtCIbPCbjNSMy0",
  authDomain: "liondynasty-93bf6.firebaseapp.com",
  projectId: "liondynasty-93bf6",
  storageBucket: "liondynasty-93bf6.appspot.com",
  messagingSenderId: "1084810328322",
  appId: "1:1084810328322:web:a05224413d4c565b1eea1b"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export {auth, provider, db};