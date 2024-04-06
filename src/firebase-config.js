// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVFNViX1UkBmFlB7hMLHHQ_EQ6_VMzPO0",
  authDomain: "nfactorial-7a4e1.firebaseapp.com",
  projectId: "nfactorial-7a4e1",
  storageBucket: "nfactorial-7a4e1.appspot.com",
  messagingSenderId: "43734143546",
  appId: "1:43734143546:web:38dad48ed161ae2d571b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();