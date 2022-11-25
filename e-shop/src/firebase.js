import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDstJ3bzgnNWbfyPqr5fED_eRSouSjEqUM",
  authDomain: "eshop-362aa.firebaseapp.com",
  projectId: "eshop-362aa",
  storageBucket: "eshop-362aa.appspot.com",
  messagingSenderId: "580615232004",
  appId: "1:580615232004:web:9ee2b4ee0fcc57d1a47351",
  measurementId: "G-TFBLGX6H05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}