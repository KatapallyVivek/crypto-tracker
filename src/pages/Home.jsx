import { Link } from "react-router-dom";
import LiveMarketPreview from "../components/LiveMarketPreview";
import bgHero from "../assets/background_crypto.jpg"; 

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      {/* HERO */}
      <section
        className="min-h-[90vh] flex items-center px-6 md:px-12"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Invest Smart<br />
              <span className="text-indigo-400">Grow with Crypto</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Track real-time cryptocurrency prices, analyze market trends,
              and make informed investment decisions with confidence.
            </p>

            <div className="flex gap-4">
              {/* Links to Prices */}
              <Link
                to="/prices"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700
                           transition font-semibold shadow-lg"
              >
                View Prices
              </Link>

              {/* Links to HowToInvest */}
              <Link
                to="/HowToInvest"
                className="px-6 py-3 rounded-xl border border-gray-700
                           hover:border-indigo-500 transition font-semibold"
              >
                How to Invest
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
          </div>

        </div>
      </section>

      {/* Why CryptoTracker */}
      <section className="relative py-24 px-6 bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Why CryptoTracker?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A clean and reliable platform to track markets, learn crypto,
              and invest with confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Live Market Tracking", desc: "Stay updated with real-time cryptocurrency prices and trends." },
              { title: "Built for Beginners", desc: "Simple UI and clear insights designed for every level." },
              { title: "Smart Insights", desc: "Track key metrics and make better investment decisions." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-900/60 border border-white/10 backdrop-blur-xl hover:border-indigo-400/40 transition">
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIVE MARKET PREVIEW */}
      <LiveMarketPreview />

      {/* FUTURE */}
      <section className="px-6 md:px-12 py-24 text-center bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Tracking Smarter Today
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Explore the crypto market, understand trends, and prepare yourself
          for smarter investment decisions.
        </p>

      </section>
      {/* FOOTER */}
<footer className="bg-gray-950 border-t border-white/10 text-gray-400">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-10 md:grid-cols-3">

    {/* Brand / About */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">
        Crypto<span className="text-indigo-400">Tracker</span>
      </h3>
      <p className="leading-relaxed">
        Track real-time crypto prices, understand market trends,
        and make smarter investment decisions with confidence.
      </p>
    </div>

    {/* Features */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
      <ul className="space-y-3">
        <li className="hover:text-indigo-400 transition">
          Real-time Market Prices
        </li>
        <li className="hover:text-indigo-400 transition">
          Beginner Friendly UI
        </li>
        <li className="hover:text-indigo-400 transition">
          Market Trend Analysis
        </li>
        <li className="hover:text-indigo-400 transition">
          Smart Investment Insights
        </li>
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-3">
        <li>
          <Link to="/prices" className="hover:text-indigo-400 transition">
            View Prices
          </Link>
        </li>
        <li>
          <Link to="/HowToInvest" className="hover:text-indigo-400 transition">
            How to Invest
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-indigo-400 transition">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-indigo-400 transition">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} CryptoTracker. All rights reserved.
  </div>
</footer>

    </div>
  );
}
