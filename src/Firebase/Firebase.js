import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARN5WedWaaDDPhAVDY2bYt1oMoLRdfKg4",
  authDomain: "micro-blogging-b44f2.firebaseapp.com",
  databaseURL: "https://micro-blogging-b44f2-default-rtdb.firebaseio.com",
  projectId: "micro-blogging-b44f2",
  storageBucket: "micro-blogging-b44f2.appspot.com",
  messagingSenderId: "383200791583",
  appId: "1:383200791583:web:e444f8e2285b8a0ef4d92a",
  measurementId: "G-0HHXVGK3CW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };


