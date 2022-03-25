import "./App.css";
import WalletCard from "./WalletCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import TokenPage from "./TokenPage.js";
import Profile from "./Profile";

function App() {
  // const [walletAddress, setWalletAddress] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <WalletCard />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="App">
              <Profile />
            </div>
          }
        />
        <Route
          path="/:walletAddress"
          element={
            <div className="App">
              <TokenPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
