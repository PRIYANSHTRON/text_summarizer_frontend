import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWjDlZ4XM3Ul89JnXyd4bpvsAgu3kIXIQ",
  authDomain: "text-summariser-579f6.firebaseapp.com",
  projectId: "text-summariser-579f6",
  storageBucket: "text-summariser-579f6.appspot.com",
  messagingSenderId: "301966135627",
  appId: "1:301966135627:web:16d49925b21076f4a598ce"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


