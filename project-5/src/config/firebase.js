
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVSSSKOUqGJgHoCcNTrmyjnb0zMbTMoYw",
  authDomain: "vite-connect.firebaseapp.com",
  projectId: "vite-connect",
  storageBucket: "vite-connect.appspot.com",
  messagingSenderId: "599733676940",
  appId: "1:599733676940:web:22493d6ce1fa5c3000c4a9"
};


export const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
