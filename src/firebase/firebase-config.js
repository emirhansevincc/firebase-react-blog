// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBINOLvNOZIEYnQUefknxHwUh_M6sVPoGs",
  authDomain: "blogproject-b4838.firebaseapp.com",
  projectId: "blogproject-b4838",
  storageBucket: "blogproject-b4838.appspot.com",
  messagingSenderId: "639449926292",
  appId: "1:639449926292:web:cb04eced86b63b4e3d8281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
