import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-6 text-white">
      <h1 className="text-5xl font-bold mb-8 text-indigo-400 text-center">
        Welcome to CryptoTracker
      </h1>

      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Track cryptocurrency prices, learn how to invest, and make informed decisions.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/login"
          className="px-8 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 font-semibold transition text-center"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-8 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 font-semibold transition text-center"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
