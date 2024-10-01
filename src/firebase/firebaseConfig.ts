import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARIE2jPk4JglRzDc7_ALPHn3gBTIF6yFo",
  authDomain: "zatarshopping-a5d19.firebaseapp.com",
  projectId: "zatarshopping-a5d19",
  storageBucket: "zatarshopping-a5d19.appspot.com",
  messagingSenderId: "752360778505",
  appId: "1:752360778505:web:8380a1fffe536cf20381d8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
