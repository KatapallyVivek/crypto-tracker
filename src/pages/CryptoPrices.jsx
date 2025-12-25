import { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import CoinCard from "../components/CoinCard";

export default function CryptoPrices() {
  const coinsPerPage = 10;
  const maxLoadMoreClicks = 2; // top10 + 10 + 10 = 30

  const [coins, setCoins] = useState([]);       // Loaded coins for display
  const [allCoins, setAllCoins] = useState([]); // Global coins for search
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);          // Load More counter

  // Fetch coins for display
  useEffect(() => {
    let isMounted = true;

    async function fetchCoins() {
      setLoading(true);
      try {
        const data = await getCoins(coinsPerPage * page); // e.g., page=1 → 10, page=2 → 20
        if (isMounted) setCoins(data);
      } catch (error) {
        console.error("Failed to fetch coins:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    async function fetchAllCoins() {
      try {
        const data = await getCoins(250); // max 250 coins for global search
        if (isMounted) setAllCoins(data);
      } catch (error) {
        console.error("Failed to fetch all coins:", error);
      }
    }

    fetchCoins();
    fetchAllCoins();

    return () => {
      isMounted = false;
    };
  }, [page]);

  // Filter coins based on search
  const filteredCoins = search
    ? allCoins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      )
    : coins;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading crypto prices...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-indigo-400">
        Today’s Crypto Prices
      </h1>

      {/* Search Bar */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search a coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 px-3 py-2 rounded-xl text-black focus:outline-none shadow-lg
                     transition duration-300 transform
                     hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]
                     focus:shadow-[0_0_20px_rgba(139,92,246,0.7)]
                     hover:scale-105 focus:scale-105"
        />
      </div>

      {/* Coins Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
        ) : (
          <p className="text-xl col-span-full text-center">No coins found</p>
        )}
      </div>

      {/* Load More Button */}
      {!search && page <= maxLoadMoreClicks ? (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setPage(page + 1)}
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg
                       transition duration-300 transform
                       hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          >
            Load More Coins
          </button>
        </div>
      ) : !search && page > maxLoadMoreClicks ? (
        <p className="mt-10 text-center text-gray-400">
          These are the most used crypto coins. Go to search bar and search for
          your coin.
        </p>
      ) : null}
    </div>
  );
}