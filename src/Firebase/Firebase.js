import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ2PBDMabVw2kZZa_vg15e9aa8YnKAxpI",
  authDomain: "crochet-f0f9e.firebaseapp.com",
  projectId: "crochet-f0f9e",
  storageBucket: "crochet-f0f9e.appspot.com",
  messagingSenderId: "1022567924410",
  appId: "1:1022567924410:web:d2bae90f3e71048a0db883",
  measurementId: "G-4ZDFQTHPXN"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };