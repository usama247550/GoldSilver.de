"use client";
import React, { useState, useEffect } from "react";

const LiveTickerZone = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/prices")
      .then((res) => res.json())
      .then((data) => setPrices(data))
      .catch((err) => console.error("Price fetch error:", err));
  }, []);

  const marketData = prices
    ? [
        { pair: "XAU/USD", price: (prices.gold_usd ? prices.gold_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ""), change: "+0.4%", up: true },
        { pair: "XAG/USD", price: (prices.silver_usd ? prices.silver_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ""), change: "-1.2%", up: false },
        { pair: "BTC/USD", price: (prices.btc_usd ? prices.btc_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ""), change: "+2.1%", up: true },
        { pair: "ETH/USD", price: (prices.eth_usd ? prices.eth_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ""), change: "+1.5%", up: true },
        { pair: "EUR/USD", price: (prices.eur_usd ? prices.eur_usd.toFixed(4) : ""), change: "-0.1%", up: false },
      ]
    : [
        { pair: "XAU/USD", price: "Loading...", change: "", up: true },
        { pair: "XAG/USD", price: "Loading...", change: "", up: false },
        { pair: "BTC/USD", price: "Loading...", change: "", up: true },
        { pair: "ETH/USD", price: "Loading...", change: "", up: true },
        { pair: "EUR/USD", price: "Loading...", change: "", up: true },
      ];

  const tickerItems = [...marketData, ...marketData, ...marketData, ...marketData, ...marketData, ...marketData];

  return (
    <div className="bg-[#0E0E0E] w-full overflow-hidden">
      <div className="py-4 relative flex items-center">
        <div className="flex gap-10 animate-ticker-ltr whitespace-nowrap w-max">
          {tickerItems.map((item, index) => (
            <div
              key={index}
              className="font-[JetBrains_Mono] text-[#CCCCCC] font-medium text-sm sm:text-base inline-block"
            >
              {item.pair}:{" "}
              <span className={item.up ? "text-[#2E7D32]" : "text-[#C62828]"}>
                {item.price} {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTickerZone;
