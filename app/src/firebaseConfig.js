import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDNkjOwxKAMvq_qZRP5PC2LbstJA8U_SSg",
  authDomain: "expoparkingcontrol.firebaseapp.com",
  databaseURL: "https://expoparkingcontrol-default-rtdb.firebaseio.com",
  projectId: "expoparkingcontrol",
  storageBucket: "expoparkingcontrol.appspot.com",
  messagingSenderId: "568588002103",
  appId: "1:568588002103:web:e52966110470d63f3eb0b2",
  measurementId: "G-P0TZ854FRL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

const db = getDatabase();
export { db };