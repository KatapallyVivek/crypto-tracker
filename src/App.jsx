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
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected pages */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Header /> {/* Header visible only after login */}
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/prices"
          element={
            <ProtectedRoute>
              <Header />
              <CryptoPrices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coin/:id"
          element={
            <ProtectedRoute>
              <Header />
              <CoinDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/howtoinvest"
          element={
            <ProtectedRoute>
              <Header />
              <HowToInvest />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}
