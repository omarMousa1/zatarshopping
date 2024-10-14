import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home"
import { Dashboard } from "./pages/Dashboard";
import { RootLayout } from "./layouts/RootLayout";

function App() {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout user={user} />}>
        <Route index element={<Home user={user} />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Home user={user} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
