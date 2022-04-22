// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJXJTgPwvixXJGC8Ljmu9v5gQbKejjc4",
  authDomain: "genius-car-ad76c.firebaseapp.com",
  projectId: "genius-car-ad76c",
  storageBucket: "genius-car-ad76c.appspot.com",
  messagingSenderId: "905578453925",
  appId: "1:905578453925:web:9284141d1418025b62664c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
