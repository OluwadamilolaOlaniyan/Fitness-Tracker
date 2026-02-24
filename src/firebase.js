import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzf8ma9Bs0qcK2pZkl_hY5BSjweFjNgSM",
  authDomain: "fitness-tracker-applicat-1a8a4.firebaseapp.com",
  projectId: "fitness-tracker-applicat-1a8a4",
  storageBucket: "fitness-tracker-applicat-1a8a4.firebasestorage.app",
  messagingSenderId: "621967991528",
  appId: "1:621967991528:web:ee4e0e843606cde56d1f5d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);