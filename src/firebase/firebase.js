// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKwQw0pU57E5Z0_2a9Iy1lnwLyGlSIRa0",
    authDomain: "cursoreactjs-58efb.firebaseapp.com",
    projectId: "cursoreactjs-58efb",
    storageBucket: "cursoreactjs-58efb.appspot.com",
    messagingSenderId: "686597854798",
    appId: "1:686597854798:web:662ed3dae458997bd7d51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);