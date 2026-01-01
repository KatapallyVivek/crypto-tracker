import { Link } from "react-router-dom";
import LiveMarketPreview from "../components/LiveMarketPreview";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">

      {/* SECTION 1 : HERO */}
      <section className="min-h-[90vh] flex items-center px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Invest Smart. <br />
              <span className="text-indigo-400">Grow with Crypto.</span>
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

          {/* Right Visual */}
          <div className="hidden md:flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80" />
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 opacity-80" />
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 opacity-80" />
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80" />
            </div>
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

      {/* SECTION 3 : LIVE MARKET PREVIEW */}
      <LiveMarketPreview />

      {/* SECTION 4 : CTA / FUTURE */}
      <section className="px-6 md:px-12 py-24 text-center bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Tracking Smarter Today
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Explore the crypto market, understand trends, and prepare yourself
          for smarter investment decisions.
        </p>

      </section>
    </div>
  );
}
