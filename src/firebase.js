import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDEg3RIQAr6DihDbE0jj3H2chZZ_nyJMM",
  authDomain: "instagram-clone-60064.firebaseapp.com",
  databaseURL: "https://instagram-clone-60064.firebaseio.com",
  projectId: "instagram-clone-60064",
  storageBucket: "instagram-clone-60064.appspot.com",
  messagingSenderId: "827238987257",
  appId: "1:827238987257:web:705e7733826aa0610d7928",
  measurementId: "G-724LPH5R4F",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
