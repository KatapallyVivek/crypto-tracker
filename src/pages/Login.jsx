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
      // Login successful, redirect to home
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="w-full max-w-md p-8 rounded-xl bg-gray-900 shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
          Login
        </h1>

        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl text-black focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl text-black focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-400 hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
