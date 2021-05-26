// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4gGhTJa9bdpU_GzhCxjzL_3VliOT-P34",
    authDomain: "mini-project-d438f.firebaseapp.com",
    projectId: "mini-project-d438f",
    storageBucket: "mini-project-d438f.appspot.com",
    messagingSenderId: "997407003957",
    appId: "1:997407003957:web:748ce2ba8cd596cdf4287c",
    measurementId: "G-JH4HKB8EJL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};