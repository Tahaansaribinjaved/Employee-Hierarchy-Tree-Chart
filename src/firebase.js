import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOszdEc64TvZ3E_0DkqQLyykGC0KEAHaw",
  authDomain: "signup-login-16aa7.firebaseapp.com",
  databaseURL: "https://signup-login-16aa7-default-rtdb.firebaseio.com",
  projectId: "signup-login-16aa7",
  storageBucket: "signup-login-16aa7.appspot.com",
  messagingSenderId: "87290304115",
  appId: "1:87290304115:web:963f44f9a599f8335d7c06",
  measurementId: "G-5GN067QSQN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db ,app }
