// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvVk5RXyZCd-YFGp-tB2-G4vfyU5BqNu0",
  authDomain: "coffee-hub-50bf5.firebaseapp.com",
  projectId: "coffee-hub-50bf5",
  storageBucket: "coffee-hub-50bf5.firebasestorage.app",
  messagingSenderId: "863311104652",
  appId: "1:863311104652:web:5fd61a80024cae0853c9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);