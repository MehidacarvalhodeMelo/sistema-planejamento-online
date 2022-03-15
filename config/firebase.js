
const { initializeApp } = require("firebase/app");

// Your web app's Firebase configuration
const firebaseConfigProd = {
  apiKey: "AIzaSyDR_FSunAMSdpPnMtPj5NdWbieSCU-7mNU",
  authDomain: "escola-fabiano-pucci-de-lima.firebaseapp.com",
  projectId: "escola-fabiano-pucci-de-lima",
  storageBucket: "escola-fabiano-pucci-de-lima.appspot.com",
  messagingSenderId: "409060083802",
  appId: "1:409060083802:web:c70abb71b11ebf27377063"
};

const firebaseConfig = {
  apiKey: "AIzaSyD5h5wP672_wSX0C5uvHCBPqIOk9Cd9DsQ",
  authDomain: "escola-1fc41.firebaseapp.com",
  databaseURL: "https://escola-1fc41-default-rtdb.firebaseio.com",
  projectId: "escola-1fc41",
  storageBucket: "escola-1fc41.appspot.com",
  messagingSenderId: "565724656009",
  appId: "1:565724656009:web:935a42970c9a5b0abff158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfigProd)
module.exports = app 