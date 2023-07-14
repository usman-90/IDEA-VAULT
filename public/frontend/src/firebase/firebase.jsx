import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBuvjJY9Gnn7uThCWmrgPBBYxlZuE6XNU8",
  authDomain: "resume-8e7c2.firebaseapp.com",
  projectId: "resume-8e7c2",
  storageBucket: "resume-8e7c2.appspot.com",
  messagingSenderId: "276924636442",
  appId: "1:276924636442:web:75f07be6e59b3b29d1e0a3",
  measurementId: "G-XPEFQ0F392",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default storage;
