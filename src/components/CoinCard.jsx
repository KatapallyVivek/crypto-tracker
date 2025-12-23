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
      className="p-6 rounded-xl bg-gray-900 shadow-md cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-2">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h3>

      <p>
        Price: $
        {coin.current_price?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      <p
        className={
          coin.price_change_percentage_24h >= 0
            ? "text-green-400"
            : "text-red-400"
        }
      >
        24h Change: {coin.price_change_percentage_24h?.toFixed(2)}%
      </p>
    </div>
  );
}

export default CoinCard;
