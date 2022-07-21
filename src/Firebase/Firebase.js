import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVANi-of7r1aZN3WNEHZKoqyCo7rGVYyU",
  authDomain: "e-commerce-agustin-perpen.firebaseapp.com",
  projectId: "e-commerce-agustin-perpen",
  storageBucket: "e-commerce-agustin-perpen.appspot.com",
  messagingSenderId: "1010979457260",
  appId: "1:1010979457260:web:8eb079c09c05ee13f2fdc9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)