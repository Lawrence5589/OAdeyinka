import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeaJMznN4q3yynjZBU7KJKNUbRxMoaS7I",
  authDomain: "oadeyinka-portfolio.firebaseapp.com",
  projectId: "oadeyinka-portfolio",
  storageBucket: "oadeyinka-portfolio.firebasestorage.app",
  messagingSenderId: "187707742310",
  appId: "1:187707742310:web:1e94ab304e9433324cb5a7",
  measurementId: "G-VZ0L6M89W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db }; 