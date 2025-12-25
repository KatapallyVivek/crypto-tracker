import { useEffect, useState, useRef } from "react";
import { getCoins } from "../services/api";
import CoinCard from "./CoinCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function LiveMarketPreview() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const data = await getCoins();
        setCoins(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch coins:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].offsetWidth + 24; // 24 = gap-x-6
      containerRef.current.scrollBy({
        left: -2 * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].offsetWidth + 24;
      containerRef.current.scrollBy({
        left: 2 * cardWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-xl">
        Loading market preview...
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-gray-950 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-10 text-center">
        Live Crypto Market
      </h2>

      <div className="relative max-w-[1000px] mx-auto">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     p-3 bg-gray-800/70 hover:bg-gray-700 rounded-full shadow-lg"
        >
          <ChevronLeftIcon className="h-6 w-6 text-indigo-400" />
        </button>

        {/* Coins Row */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-hidden"
        >
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="flex-shrink-0 w-[calc(25%-1.5rem)]" // 25% = 4 cards, 1.5rem = gap
            >
              <CoinCard coin={coin} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     p-3 bg-gray-800/70 hover:bg-gray-700 rounded-full shadow-lg"
        >
          <ChevronRightIcon className="h-6 w-6 text-indigo-400" />
        </button>
      </div>
    </section>
  );
}
