import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const paths = ["/home", "/prices", "/howtoinvest"];
  const labels = ["Home", "Prices", "How to Invest"];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  return (
    <header
      className="sticky top-0 w-full z-50
      bg-gradient-to-r from-gray-950 via-black to-gray-900
      dark:from-gray-100 dark:via-white dark:to-gray-200
      border-b border-white/10 dark:border-black/10
      shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
    >
      {/* Aura glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-20 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-20 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
     <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide
          text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          drop-shadow-[0_0_20px_rgba(139,92,246,0.7)]"
        >
          CryptoTracker
        </NavLink>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          {paths.map((path, i) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `group relative transition-all duration-300 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-300 dark:text-gray-700 hover:text-indigo-400"
                }`
              }
            >
              {labels[i]}
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px]
                  bg-gradient-to-r from-indigo-400 to-purple-500
                  origin-left scale-x-0 transition-transform duration-300
                  group-hover:scale-x-100"
              ></span>
            </NavLink>
          ))}

          {/* Logout button */}
          {currentUser && (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-1.5 rounded-lg text-xs font-semibold
                bg-red-600 text-white shadow-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
