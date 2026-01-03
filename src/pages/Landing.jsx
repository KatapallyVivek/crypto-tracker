import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/crypto.png";

export default function Landing() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-white relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Crypto Tracker
        </h1>

        <p className="text-xl mb-8 max-w-xl mx-auto drop-shadow-md">
          Track your cryptocurrency investments easily and make informed decisions.
        </p>

        <div className="flex gap-6 justify-center">
          <Link
            to="/signup"
           className="px-6 py-3 bg-blue-900 hover:bg-blue-800 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition transform hover:scale-105"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
