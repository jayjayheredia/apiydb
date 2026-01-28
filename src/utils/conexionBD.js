// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3SXnFVmYUebYpbOTNdYNLMlKZ7rrsd0",
  authDomain: "codoacodojjh-a3619.firebaseapp.com",
  projectId: "codoacodojjh-a3619",
  storageBucket: "codoacodojjh-a3619.appspot.com",
  messagingSenderId: "306536528123",
  appId: "1:306536528123:web:4e0f3604a46fba8a09185e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)