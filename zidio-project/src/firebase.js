/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOXbBmnn4L-Fu32GAqmroEvUX3YNKaVEs",
    authDomain: "zidio-project-30693.firebaseapp.com",
    projectId: "zidio-project-30693",
    storageBucket: "zidio-project-30693.firebasestorage.app",
    messagingSenderId: "814525265338",
    appId: "1:814525265338:web:0475799bb3e412ccbc5983",
    measurementId: "G-4N25H8S519"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };

