import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaHQcmcuXSFJt1dtXi_DiQkaPflwRMM20",
    authDomain: "whatsapp-2-9baa3.firebaseapp.com",
    projectId: "whatsapp-2-9baa3",
    storageBucket: "whatsapp-2-9baa3.appspot.com",
    messagingSenderId: "821692018315",
    appId: "1:821692018315:web:c2e3e5d5ee1ccece4bee8e"
};

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };