import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDZy3xjy6yZL6YZicP3tQNCLAQyMJJZaXU",
  authDomain: "clom-1a9ee.firebaseapp.com",
  projectId: "clom-1a9ee",
  storageBucket: "clom-1a9ee.appspot.com",
  messagingSenderId: "833093263793",
  appId: "1:833093263793:web:e8ececc2a5259cad221d90",
  measurementId: "G-JD6S4352Q3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{ app, auth, firestore, storage};