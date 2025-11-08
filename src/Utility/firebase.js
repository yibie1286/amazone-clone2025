// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvZlbZ-NvTM1mh5nCwPFX54iZ0itVzpSY",
  authDomain: "clone-ea4d5.firebaseapp.com",
  projectId: "clone-ea4d5",
  storageBucket: "clone-ea4d5.firebasestorage.app",
  messagingSenderId: "752310996553",
  appId: "1:752310996553:web:71596530c96a5e46a4b998"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
