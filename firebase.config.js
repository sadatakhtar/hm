// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMTlG2crYoKfmJLN6wndCqzsPm4BGpS5w",
  authDomain: "hm-fe-5bf88.firebaseapp.com",
  projectId: "hm-fe-5bf88",
  storageBucket: "hm-fe-5bf88.firebasestorage.app",
  messagingSenderId: "545030839033",
  appId: "1:545030839033:web:f1dc818f79d44619322028",
  measurementId: "G-KQT2MWG1F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };