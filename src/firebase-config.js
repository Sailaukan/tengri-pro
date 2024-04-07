import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVFNViX1UkBmFlB7hMLHHQ_EQ6_VMzPO0",
  authDomain: "nfactorial-7a4e1.firebaseapp.com",
  projectId: "nfactorial-7a4e1",
  storageBucket: "nfactorial-7a4e1.appspot.com",
  messagingSenderId: "43734143546",
  appId: "1:43734143546:web:38dad48ed161ae2d571b03"
};
 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();