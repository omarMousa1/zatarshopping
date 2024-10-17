import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home"
import { Dashboard } from "./pages/Dashboard";
import { RootLayout } from "./layouts/RootLayout";
import { SkeletonTheme } from "react-loading-skeleton";
import { Cart } from "./pages/Cart";
import { Address } from "./pages/Address";
import { Order } from "./pages/Order";

function App() {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("User state changed:", user);
      setUser(user);
    });

    return () => {
      console.log("Cleaning up listener");
      unsubscribe();
    }
  }, [user])

  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout user={user} />}>
          <Route index element={<Home user={user} />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Home user={user} />} />
          <Route path="/cart" element={user ? <Cart /> : <Home user={user} />} />
          <Route path="/address" element={user ? <Address /> : <Home user={user} />} />
          <Route path="/order" element={user ? <Order /> : <Home user={user} />} />
          </Route>
        </Routes>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
