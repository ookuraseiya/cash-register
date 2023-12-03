// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyANVeRBdY9c4qZcvVnMBzvbwG7QRFg5m-4',
  authDomain: 'react-cash-register-4ebfc.firebaseapp.com',
  projectId: 'react-cash-register-4ebfc',
  storageBucket: 'react-cash-register-4ebfc.appspot.com',
  messagingSenderId: '233328994523',
  appId: '1:233328994523:web:5f67264b19c4152e85c4fe',
  measurementId: 'G-F08EEGVKFG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
