import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); 
    } catch (err) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        setError("No account found. Please signup first.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-animated-gradient px-4">

      <div className="w-full max-w-md p-10 rounded-3xl bg-gray-900/80 backdrop-blur-lg shadow-2xl transform transition-transform duration-500 hover:scale-105">

        {/* Optional bouncing crypto icon */}
      
        <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
          Login
        </h1>

        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
          />

          <button
            type="submit"
            className="w-full py-3 font-semibold text-lg rounded-xl shadow-lg
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       hover:from-pink-500 hover:to-indigo-500 transition-all duration-500"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}
