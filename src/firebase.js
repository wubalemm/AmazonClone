
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmDVpthX2W2YSuyCf5j83GkFiieZyeZ-s",
  authDomain: "frontend-6e899.firebaseapp.com",
  projectId: "frontend-6e899",
  storageBucket: "frontend-6e899.appspot.com",
  messagingSenderId: "549011562583",
  appId: "1:549011562583:web:e62ed22a9a9caf69420312",
  measurementId: "G-KM812GXLGK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
