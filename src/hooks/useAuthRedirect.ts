import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate("/login");
      } else {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
        } else {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (!userDoc.exists()) {
            navigate("/login");
          }
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);
};
