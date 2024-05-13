import { initializeApp , FirebaseApp} from "firebase/app";
import { getFirestore,  Firestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};



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