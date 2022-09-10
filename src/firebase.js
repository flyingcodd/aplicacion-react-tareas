// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvpV_y92abmseH5paBBq9HNGMFvICNYs",
  authDomain: "react-8010a.firebaseapp.com",
  projectId: "react-8010a",
  storageBucket: "react-8010a.appspot.com",
  messagingSenderId: "59973239027",
  appId: "1:59973239027:web:25c9c4a301036e2a8af786"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);