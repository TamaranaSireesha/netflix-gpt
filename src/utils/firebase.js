// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU2vVzoPdqJLFzHaFWzRbQrsWsah_qahI",
  authDomain: "netflix2gpt.firebaseapp.com",
  projectId: "netflix2gpt",
  storageBucket: "netflix2gpt.appspot.com",
  messagingSenderId: "217574516585",
  appId: "1:217574516585:web:2fc40a4db9ddcd95c77ff8",
  measurementId: "G-WVHETBS04G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
