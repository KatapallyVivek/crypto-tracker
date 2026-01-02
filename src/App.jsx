// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CryptoPrices from "./pages/CryptoPrices";
import CoinDetails from "./pages/CoinDetails";
import HowToInvest from "./pages/HowToInvest";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      {/* Show Header only when logged in */}
      <ProtectedRoute>
        <Header />
      </ProtectedRoute>

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected pages */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/prices" element={<ProtectedRoute><CryptoPrices /></ProtectedRoute>} />
        <Route path="/coin/:id" element={<ProtectedRoute><CoinDetails /></ProtectedRoute>} />
        <Route path="/howtoinvest" element={<ProtectedRoute><HowToInvest /></ProtectedRoute>} />  

        {/* Fallback */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}
