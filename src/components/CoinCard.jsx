import { useNavigate } from "react-router-dom";

function CoinCard({ coin }) {
  const navigate = useNavigate();

  if (!coin) return null;

  const goToDetails = () => {
    navigate(`/coin/${coin.id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="
        group
        p-6
        rounded-2xl
        bg-gray-900/70
        border border-white/10
        cursor-pointer
        transition-all duration-300 ease-out
        transform perspective-1000
        hover:scale-105
        hover:rotate-y-2
        hover:rotate-x-2
        hover:bg-gradient-to-br
        hover:from-indigo-900/40
        hover:to-purple-900/40
        hover:border-indigo-400/40
        hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
      "
    >
      {/* Coin Image */}
      {coin.image && (
        <div className="flex justify-center mb-4">
          <img
            src={coin.image}
            alt={coin.name}
            className="h-16 w-16 rounded-full object-contain shadow-lg"
          />
        </div>
      )}

      {/* Coin Name */}
      <h3 className="text-lg font-semibold mb-2 text-white text-center">
        {coin.name}
        <span className="text-gray-400 ml-2 uppercase text-sm">
          ({coin.symbol})
        </span>
      </h3>

      {/* Price */}
      <p className="text-indigo-400 font-bold text-lg mb-2 text-center">
        $
        {coin.current_price?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      {/* 24h Change */}
      <p
        className={`font-semibold text-center ${
          coin.price_change_percentage_24h >= 0
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        24h Change: {coin.price_change_percentage_24h?.toFixed(2)}%
      </p>
    </div>
  );
}

export default CoinCard;
