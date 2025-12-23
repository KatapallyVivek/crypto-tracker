import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

if (!localStorage.getItem("theme")) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

export default function Home() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen relative overflow-hidden 
      bg-gradient-to-br from-gray-950 via-black to-gray-900
      dark:from-gray-100 dark:via-white dark:to-gray-200
      text-white dark:text-gray-900 flex flex-col items-center justify-center">

      {/* Aura / glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 px-5 py-2 rounded-xl 
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white font-medium
          shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]
          transition"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="w-full max-w-6xl px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-20 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
            drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]">
            Welcome to CryptoTracker
          </h1>
          <p className="text-gray-400 dark:text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            Invest smart, learn crypto basics, and track the market confidently — 
            all in one simple and secure platform.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

          {/* Card 1 - Today’s Crypto Prices */}
          <div
            onClick={() => navigate("/prices")}
            className="relative p-10 rounded-3xl 
              bg-gray-900/80 dark:bg-white/80 backdrop-blur-xl
              border border-white/10 dark:border-black/10
              shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
              transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 
              hover:opacity-100 transition"></div>

            <h2 className="text-2xl font-semibold mb-3 text-indigo-300 dark:text-indigo-600">
              Today’s Crypto Prices
            </h2>
            <p className="text-gray-400 dark:text-gray-800">
              Check live cryptocurrency prices and market movements in real-time.
            </p>
          </div>

          {/* Card 2 - How to Invest */}
          <div
            onClick={() => navigate("/invest")}
            className="relative p-10 rounded-3xl 
              bg-gray-900/80 dark:bg-white/80 backdrop-blur-xl
              border border-white/10 dark:border-black/10
              shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
              transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 
              hover:opacity-100 transition"></div>

            <h2 className="text-2xl font-semibold mb-3 text-indigo-300 dark:text-indigo-600">
              How to Invest in Crypto
            </h2>
            <p className="text-gray-400 dark:text-gray-800">
              Understand crypto investing and learn how to start safely as a beginner.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
