// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDedew2aDBD9Sq8AoaS3wLAdLkiVaADI0M",
    authDomain: "car-servicing-project.firebaseapp.com",
    projectId: "car-servicing-project",
    storageBucket: "car-servicing-project.appspot.com",
    messagingSenderId: "1060390299436",
    appId: "1:1060390299436:web:f3acbc32b084519e4e6e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
