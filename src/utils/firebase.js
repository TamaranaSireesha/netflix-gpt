// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaSLtxn55S2LCLptYJ-Z38cuCW17CyHMQ",
  authDomain: "netflixgpt-eb5a8.firebaseapp.com",
  projectId: "netflixgpt-eb5a8",
  storageBucket: "netflixgpt-eb5a8.appspot.com",
  messagingSenderId: "83742479558",
  appId: "1:83742479558:web:27193029fdbc463e7ef3c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();
