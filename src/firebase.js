import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVfoiFhBM8SshCZDmjzrG7yeJLDko5BZk",
    authDomain: "ig-clone-4b4b2.firebaseapp.com",
    databaseURL: "https://ig-clone-4b4b2.firebaseio.com",
    projectId: "ig-clone-4b4b2",
    storageBucket: "ig-clone-4b4b2.appspot.com",
    messagingSenderId: "627126945724",
    appId: "1:627126945724:web:faed3ffe32222510530db9",
    measurementId: "G-Z0VD6SW08X"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
