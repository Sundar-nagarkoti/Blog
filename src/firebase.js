import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
    apiKey: "AIzaSyDYFrixYaeS7DxpymHMVf7HZbLQj7kAQOM",
    authDomain: "blog-b9192.firebaseapp.com",
    projectId: "blog-b9192",
    storageBucket: "blog-b9192.appspot.com",
    messagingSenderId: "95044733931",
    appId: "1:95044733931:web:b5f1b178100f671b4567ae"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export const firestore=firebase.firestore();

  export const auth=firebase.auth();

  let provider=new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;