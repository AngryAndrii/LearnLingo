import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const API_KEY = import.meta.env.VITE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "learnlingo-72230.firebaseapp.com",
  databaseURL:
    "https://learnlingo-72230-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-72230",
  storageBucket: "learnlingo-72230.appspot.com",
  messagingSenderId: "906284379815",
  appId: "1:906284379815:web:fd7daa72f7080b1c113582",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase(app);
