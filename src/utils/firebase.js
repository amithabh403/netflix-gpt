// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8pr0xgFVVeBQJVoHh_8IvZTjqdkFKVP4",
  authDomain: "netflix-gpt-f2b2b.firebaseapp.com",
  projectId: "netflix-gpt-f2b2b",
  storageBucket: "netflix-gpt-f2b2b.appspot.com",
  messagingSenderId: "572207922340",
  appId: "1:572207922340:web:99bc86fe11a1ad4a21fa31",
  measurementId: "G-XXSVNCR58E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();