// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU3Zrkmb1_zvOFpSAmUtwmTafoimbWJC0",
  authDomain: "kora-real-estate.firebaseapp.com",
  projectId: "kora-real-estate",
  storageBucket: "kora-real-estate.firebasestorage.app",
  messagingSenderId: "78168920530",
  appId: "1:78168920530:web:f0a93472e56b4596f6380b",
  measurementId: "G-TWC7E8RS17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);