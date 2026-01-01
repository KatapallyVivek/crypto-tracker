import { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import CoinCard from "../components/CoinCard";

export default function CryptoPrices() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(10);
  const [loadClicks, setLoadClicks] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCoins() {
      try {
        setLoading(true);
        const data = await getCoins(visibleCount);
        setCoins(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();

    // Refetch coins when tab becomes active
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchCoins();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [visibleCount]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading crypto prices...
      </div>
    );
  }

  // Filter coins by search
  const searchedCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const coinsToShow = search ? searchedCoins : coins;

  const handleLoadMore = () => {
    if (loadClicks < 2) {
      setVisibleCount((prev) => prev + 10);
      setLoadClicks((prev) => prev + 1);
    } else {
      setLoadClicks(3);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-indigo-400">
        Today’s Crypto Prices
      </h1>

      {/* Search */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search a coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-52 px-3 py-2 rounded-xl text-black focus:outline-none"
        />
      </div>

      {/* Coins Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coinsToShow.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>

      {/* Load More */}
      {!search && (
        <div className="text-center mt-10">
          {loadClicks < 3 ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition"
            >
              Load More
            </button>
          ) : (
            <p className="text-gray-400">
              These are the most used crypto coins. Search for your coin above.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
