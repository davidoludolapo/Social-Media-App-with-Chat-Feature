// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFVwoC7L9DWVtAisaiM4d91z-bF2SI8GI",
  authDomain: "verscial.firebaseapp.com",
  projectId: "verscial",
  storageBucket: "verscial.appspot.com",
  messagingSenderId: "886148808420",
  appId: "1:886148808420:web:dafcfbced5e323eb6536f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app