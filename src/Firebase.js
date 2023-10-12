
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
    apiKey: "AIzaSyBezulx_-nNEs53dIZSiPrUcuY5bP_yMdc",
    authDomain: "netflix-clone-afec9.firebaseapp.com",
    projectId: "netflix-clone-afec9",
    storageBucket: "netflix-clone-afec9.appspot.com",
    messagingSenderId: "669952292113",
    appId: "1:669952292113:web:4293ef09fae9b9781c88b0"
  };

  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app);
  export {auth}