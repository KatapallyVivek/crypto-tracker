import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export default function HowToInvest() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-400 text-center">
          How to Invest in Crypto
        </h1>

        {/* INTRO */}
        <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center mb-16">
          New to cryptocurrency? Don’t worry. Follow these simple steps
          to start investing safely and confidently.
        </p>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">

          <div className="group p-8 rounded-2xl bg-gray-900 border border-white/10
                          transition hover:-translate-y-1 hover:shadow-xl
                          hover:border-indigo-400/40">
            <AcademicCapIcon className="h-10 w-10 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Learn the Basics</h2>
            <p className="text-gray-400">
              Understand what cryptocurrency is, and the risks involved before investing.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gray-900 border border-white/10
                          transition hover:-translate-y-1 hover:shadow-xl
                          hover:border-indigo-400/40">
            <ShieldCheckIcon className="h-10 w-10 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">
              Choose a Trusted Platform
            </h2>
            <p className="text-gray-400">
              Select a reliable crypto exchange with strong security
              and good user reviews.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gray-900 border border-white/10
                          transition hover:-translate-y-1 hover:shadow-xl
                          hover:border-indigo-400/40">
            <CurrencyDollarIcon className="h-10 w-10 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Start Small</h2>
            <p className="text-gray-400">
              Begin with a small amount you can afford to lose.
              Avoid investing all your savings.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gray-900 border border-white/10
                          transition hover:-translate-y-1 hover:shadow-xl
                          hover:border-indigo-400/40">
            <ChartBarIcon className="h-10 w-10 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Track & Manage</h2>
            <p className="text-gray-400">
              Monitor prices, trends, and manage your portfolio
              regularly.
            </p>
          </div>

        </div>

        {/* SAFETY TIPS */}
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-300">
          Safety Tips for Beginners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <LockClosedIcon className="h-8 w-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Secure Your Wallet</h3>
            <p className="text-gray-400">
              Use strong passwords, enable 2FA, and never share
              your private keys.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <ExclamationTriangleIcon className="h-8 w-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Avoid Scams</h3>
            <p className="text-gray-400">
              Stay away from guaranteed returns, fake giveaways,
              and unknown links.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <ArrowTrendingDownIcon className="h-8 w-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Don’t Panic Sell</h3>
            <p className="text-gray-400">
              Crypto prices fluctuate. Make decisions based
              on research, not fear.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <EyeIcon className="h-8 w-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">
              Do Your Own Research
            </h3>
            <p className="text-gray-400">
              Always research projects and use-cases before
              investing money.
            </p>
          </div>

        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-300">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto mb-24 space-y-6">

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <h3 className="font-semibold mb-2">Is crypto investing safe?</h3>
            <p className="text-gray-400">
              Crypto is volatile and risky. Smart investing and
              starting small helps reduce risk.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <h3 className="font-semibold mb-2">
              How much money should I start with?
            </h3>
            <p className="text-gray-400">
              Start with an amount you can afford to lose.
              Many beginners start very small.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <h3 className="font-semibold mb-2">
              Can I lose all my money?
            </h3>
            <p className="text-gray-400">
              Yes, if you invest carelessly. Research and diversification
              reduce this risk.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <h3 className="font-semibold mb-2">
              Is cryptocurrency legal in India?
            </h3>
            <p className="text-gray-400">
              Crypto is legal but regulated and taxed in India.
              Always follow government rules.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl
                        bg-gradient-to-r from-indigo-600/20 to-purple-600/20
                        border border-indigo-400/30">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore the Market?
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Track live crypto prices and make informed decisions
            using CryptoTracker.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/prices"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700
                         transition font-semibold shadow-lg">
              View Crypto Prices
            </Link>

            <Link
              to="/"
              className="px-8 py-3 rounded-xl border border-gray-500
                         hover:border-indigo-400 transition font-semibold">
              Go to Home
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
