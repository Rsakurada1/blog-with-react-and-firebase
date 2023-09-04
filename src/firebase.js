import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCireQfmibSQLGn14KK_lzr_cICXIlbswc",
  authDomain: "blog-d7b49.firebaseapp.com",
  projectId: "blog-d7b49",
  storageBucket: "blog-d7b49.appspot.com",
  messagingSenderId: "103168348768",
  appId: "1:103168348768:web:fec53451cb80222891e905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};