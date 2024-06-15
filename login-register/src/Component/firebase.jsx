// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSN7I2yx3nj9n5uqBTguRqFB1rdxusOlI",
  authDomain: "authentication-16c7c.firebaseapp.com",
  projectId: "authentication-16c7c",
  storageBucket: "authentication-16c7c.appspot.com",
  messagingSenderId: "632575884363",
  appId: "1:632575884363:web:dcfbdd46dbbfed3d9de1ce"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export {auth}