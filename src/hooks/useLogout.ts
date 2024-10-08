import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return { logout };
};
