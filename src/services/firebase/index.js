
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyByNiDbwk1BwjiaR7gjbgmklFYmFUW2pqU",
  authDomain: "backend-devcafe.firebaseapp.com",
  projectId: "backend-devcafe",
  storageBucket: "backend-devcafe.appspot.com",
  messagingSenderId: "1021190232609",
  appId: "1:1021190232609:web:2bcd4699ac94c7182e6160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)