// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { initializeApp } = require("firebase/app");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR_FSunAMSdpPnMtPj5NdWbieSCU-7mNU",
  authDomain: "escola-fabiano-pucci-de-lima.firebaseapp.com",
  projectId: "escola-fabiano-pucci-de-lima",
  storageBucket: "escola-fabiano-pucci-de-lima.appspot.com",
  messagingSenderId: "409060083802",
  appId: "1:409060083802:web:c70abb71b11ebf27377063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
module.exports = app