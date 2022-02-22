

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHY0HPRs-sq0-H3INEKWzefCywWVaoC8M",
  authDomain: "my-next-project-d0a49.firebaseapp.com",
  projectId: "my-next-project-d0a49",
  storageBucket: "my-next-project-d0a49.appspot.com",
  messagingSenderId: "773095535516",
  appId: "1:773095535516:web:0364af7d340187fe280e59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
