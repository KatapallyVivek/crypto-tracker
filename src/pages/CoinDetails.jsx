import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CoinDetails() {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoinData() {
      try {
        // Fetch coin details
        const coinResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoin(coinResponse.data);

        // Fetch price chart data (7 days)
        const chartResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: 7,
            },
          }
        );
        setPrices(chartResponse.data.prices);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoinData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading coin details...
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Coin not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 dark:bg-white text-white dark:text-gray-900 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-gray-900 dark:bg-gray-100 p-8 rounded-xl shadow-lg">

        {/* Title connects to CoinGecko */}
        <h1 className="text-3xl font-bold mb-6 text-indigo-400 dark:text-indigo-600 cursor-pointer hover:underline"
    onClick={() => window.open(`https://www.coingecko.com/en/coins/${coin.id}/usd`, "_blank")}>
  {coin.name} ({coin.symbol.toUpperCase()})
</h1>


        {/* Price Info */}
        <p className="mb-2">
          Current Price: $
          {coin.market_data.current_price.usd.toLocaleString()}
        </p>
        <p className="mb-2">
          Market Cap: $
          {coin.market_data.market_cap.usd.toLocaleString()}
        </p>
        <p className="mb-2">
          24h High: $
          {coin.market_data.high_24h.usd.toLocaleString()}
        </p>
        <p className="mb-6">
          24h Low: $
          {coin.market_data.low_24h.usd.toLocaleString()}
        </p>

        {/* Key Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-200">
            <p className="text-sm text-gray-400 dark:text-gray-600">Rank</p>
            <p className="text-lg font-semibold">
              #{coin.market_cap_rank}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-200">
            <p className="text-sm text-gray-400 dark:text-gray-600">
              Circulating Supply
            </p>
            <p className="text-lg font-semibold">
              {coin.market_data.circulating_supply.toLocaleString()}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-200">
            <p className="text-sm text-gray-400 dark:text-gray-600">
              Total Supply
            </p>
            <p className="text-lg font-semibold">
              {coin.market_data.total_supply
                ? coin.market_data.total_supply.toLocaleString()
                : "N/A"}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-200">
            <p className="text-sm text-gray-400 dark:text-gray-600">
              All Time High
            </p>
            <p className="text-lg font-semibold">
              ${coin.market_data.ath.usd.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
