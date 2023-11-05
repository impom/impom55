import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDckjKu9FSiadxqVh7eNvnuJfV00g-jk1Y",
  authDomain: "impom55.firebaseapp.com",
  projectId: "impom55",
  storageBucket: "impom55.appspot.com",
  messagingSenderId: "668806547962",
  appId: "1:668806547962:web:308eda712e54b0bbdc7c43",
  measurementId: "G-1XBLBQ7KGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);