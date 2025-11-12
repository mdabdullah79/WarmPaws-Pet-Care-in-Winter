// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCToFDdSa0RuWklnOqHtbhZ-k1TvRcxsF8",
  authDomain: "warmpas.firebaseapp.com",
  projectId: "warmpas",
  storageBucket: "warmpas.firebasestorage.app",
  messagingSenderId: "897210076159",
  appId: "1:897210076159:web:74cbd8321b4d563053b5ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export default app;