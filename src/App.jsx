import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import CryptoPrices from "./pages/CryptoPrices";
import HowToInvest from "./pages/HowToInvest";
import CoinDetails from "./pages/CoinDetails";

function App() {
  return (
    <Router>
      <Header />

      {/* Padding so content doesn't hide under header */}
       <div className="min-h-screen bg-black"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<CryptoPrices />} />
          <Route path="/invest" element={<HowToInvest />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
