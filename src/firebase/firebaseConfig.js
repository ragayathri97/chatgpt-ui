// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVD5dlXQHzkw1O3SZdOLSSTMuhs9FUUBk",
  authDomain: "chat-92af1.firebaseapp.com",
  projectId: "chat-92af1",
  storageBucket: "chat-92af1.firebasestorage.app",
  messagingSenderId: "492841928405",
  appId: "1:492841928405:web:ce63bc23587920b62e045c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth for authentication
export default app; // Export app as default for other Firebase services if needed