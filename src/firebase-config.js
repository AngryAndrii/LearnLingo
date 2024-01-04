import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBDsYAXCB7-4CF-jLeKJ_AbxLO83ZOJD4",
  authDomain: "learnlingo-72230.firebaseapp.com",
  projectId: "learnlingo-72230",
  storageBucket: "learnlingo-72230.appspot.com",
  messagingSenderId: "906284379815",
  appId: "1:906284379815:web:fd7daa72f7080b1c113582",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
