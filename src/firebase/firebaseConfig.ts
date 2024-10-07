import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeNaehQVGpb4UHP_7HyvxZ2Y3sJURv_Sg",
  authDomain: "zatar-9dbcc.firebaseapp.com",
  projectId: "zatar-9dbcc",
  storageBucket: "zatar-9dbcc.appspot.com",
  messagingSenderId: "254905955618",
  appId: "1:254905955618:web:cc71765f43c37322a6217b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
