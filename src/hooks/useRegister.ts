import { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [error, setError] = useState<string>("");
  const [load, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const register = async () => {
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Password do not match");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userData = {
        username,
        email,
        phoneNumber,
        uid: user.uid,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "users", user.uid), userData);
      console.log("User registered successfully:", userData);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
      console.log("Error registering user:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    phoneNumber,
    setPhoneNumber,
    error,
    load,
    register,
  };
};
