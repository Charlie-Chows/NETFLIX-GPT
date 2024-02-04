// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJpZjOZZ8-H4V2HdeJtNIkfzvYpj8KLCM",
  authDomain: "netflixgpt-507a2.firebaseapp.com",
  projectId: "netflixgpt-507a2",
  storageBucket: "netflixgpt-507a2.appspot.com",
  messagingSenderId: "84197453140",
  appId: "1:84197453140:web:059f68f4540dfcb0feecc1",
  measurementId: "G-LSXCSNF2MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);