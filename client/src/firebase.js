// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-210f7.firebaseapp.com",
  projectId: "mern-auth-210f7",
  storageBucket: "mern-auth-210f7.appspot.com",
  messagingSenderId: "1051617475198",
  appId: "1:1051617475198:web:3e5170f1037e329fccb62f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);