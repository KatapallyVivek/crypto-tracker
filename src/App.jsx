import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CryptoPrices from "./pages/CryptoPrices";
import HowToInvest from "./pages/HowToInvest";
import CoinDetails from "./pages/CoinDetails"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<CryptoPrices />} />
        <Route path="/invest" element={<HowToInvest />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
