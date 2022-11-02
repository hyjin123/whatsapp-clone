import firebase from "firebase/compat/app"; //v9
import "firebase/compat/auth"; //v9
import "firebase/compat/firestore"; //v9

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADKvKEMHoYemk6AuX9j1d_KJeEAAljO0I",
  authDomain: "whatsapp-clone-105d5.firebaseapp.com",
  projectId: "whatsapp-clone-105d5",
  storageBucket: "whatsapp-clone-105d5.appspot.com",
  messagingSenderId: "1073147220836",
  appId: "1:1073147220836:web:d6c4f4fb5d7989a4d0a071",
  measurementId: "G-ZD43MT52ZH",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
