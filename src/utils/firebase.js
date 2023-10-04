// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgZR8y7J8U5RBnXdiiGEYhVa3KBbKWRk",
  authDomain: "netflix-gpt-24175.firebaseapp.com",
  projectId: "netflix-gpt-24175",
  storageBucket: "netflix-gpt-24175.appspot.com",
  messagingSenderId: "992940397129",
  appId: "1:992940397129:web:63bae7d2dba4d5a382e598",
  measurementId: "G-4RVW1V3TG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
