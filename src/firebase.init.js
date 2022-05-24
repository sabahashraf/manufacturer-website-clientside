// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmiNkavCGVvCE8tAT98aDiMeDyx8MS62E",

  authDomain: "power-painting-tools.firebaseapp.com",

  projectId: "power-painting-tools",

  storageBucket: "power-painting-tools.appspot.com",

  messagingSenderId: "78560501095",

  appId: "1:78560501095:web:d3a4b5170917b00ebea3c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
