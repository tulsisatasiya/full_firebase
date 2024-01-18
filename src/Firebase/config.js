// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrSC0J4RkfxoWxmQEUoHbAnVhfHX8fQhM",
  authDomain: "fir-bcf2c.firebaseapp.com",
  projectId: "fir-bcf2c",
  storageBucket: "fir-bcf2c.appspot.com",
  messagingSenderId: "986148531326",
  appId: "1:986148531326:web:a2313da4d1f5decf94fc2f",
  measurementId: "G-JTV016W074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };