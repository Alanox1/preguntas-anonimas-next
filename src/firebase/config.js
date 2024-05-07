// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdYXwWX90XEj5qedsjXEZkggtkq0aucGM",
  authDomain: "preguntas-anonimas-8eed3.firebaseapp.com",
  projectId: "preguntas-anonimas-8eed3",
  storageBucket: "preguntas-anonimas-8eed3.appspot.com",
  messagingSenderId: "621079966463",
  appId: "1:621079966463:web:cb2b1370801f5c805112ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// export default app
export {
  db,
  app
}