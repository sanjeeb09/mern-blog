// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b07d6.firebaseapp.com",
  projectId: "mern-blog-b07d6",
  storageBucket: "mern-blog-b07d6.appspot.com",
  messagingSenderId: "901448581703",
  appId: "1:901448581703:web:16747261a2e1d7ce7f2762"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);