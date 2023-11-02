// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsbMsDQKSrJMODSGKOJiLagEj8ZsaIEJQ",
  authDomain: "earthkeepers-bbc61.firebaseapp.com",
  projectId: "earthkeepers-bbc61",
  storageBucket: "earthkeepers-bbc61.appspot.com",
  messagingSenderId: "657025524482",
  appId: "1:657025524482:web:22e8dc6302afb72fd0981b",
  measurementId: "G-QNXZJQZP6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

//initialize firebase auth
const auth = getAuth();

const db = getFirestore(app);

//export the auth object
export { app, auth, db, storage }