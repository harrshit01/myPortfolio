
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGj8AyQHZKihlNnZzCINM12aB2DcaD_kM",
  authDomain: "my-reactportfolio-data.firebaseapp.com",
  projectId: "my-reactportfolio-data",
  storageBucket: "my-reactportfolio-data.appspot.com",
  messagingSenderId: "146680738802",
  appId: "1:146680738802:web:0fa9ce17ce23aa28c8716b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);