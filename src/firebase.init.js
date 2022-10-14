// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbzLrazwcv9Fs-o0-6ZLzbmcKRk3C1Puo",
  authDomain: "router-firebase-integrat-a4b67.firebaseapp.com",
  projectId: "router-firebase-integrat-a4b67",
  storageBucket: "router-firebase-integrat-a4b67.appspot.com",
  messagingSenderId: "884185844239",
  appId: "1:884185844239:web:a738f8b91e4f027b95f17a",
  measurementId: "G-EB354YZWZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;