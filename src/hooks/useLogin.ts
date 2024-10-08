import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const Login = async () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async () => {
    setError("");
    setLoad(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const customToken = await auth.currentUser?.getIdToken();
        localStorage.setItem("token", customToken || "");

        console.log("User data:", userDoc.data());
        navigate("/dashboard");
      } else {
        setError("User data not found in Firestore");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoad(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    load,
    login,
  };
};
