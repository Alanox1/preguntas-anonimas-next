// const { initializeApp } = require("firebase/app");
// const { getFirestore } = require("firebase/firestore");


// // Import the functions you need from the SDKs you need
import { initializeApp , FirebaseApp} from "firebase/app";
import { getFirestore,  Firestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

// // export default app
export {
  db,
  app
}











// module.exports = {
//   db,
//   app
// };