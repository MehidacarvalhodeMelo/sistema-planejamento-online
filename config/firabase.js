// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5h5wP672_wSX0C5uvHCBPqIOk9Cd9DsQ",
  authDomain: "escola-1fc41.firebaseapp.com",
  projectId: "escola-1fc41",
  storageBucket: "escola-1fc41.appspot.com",
  messagingSenderId: "565724656009",
  appId: "1:565724656009:web:935a42970c9a5b0abff158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = app