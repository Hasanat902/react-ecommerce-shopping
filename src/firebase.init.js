// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8dyCrwj6Sgh4uhcehw-VSq9avrVg85XE",
  authDomain: "react-ecommerce-shopping.firebaseapp.com",
  projectId: "react-ecommerce-shopping",
  storageBucket: "react-ecommerce-shopping.appspot.com",
  messagingSenderId: "605673667101",
  appId: "1:605673667101:web:42ce0f93578daff4fde4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;