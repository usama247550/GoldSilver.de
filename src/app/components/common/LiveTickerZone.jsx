"use client";
import React, { useState, useEffect } from "react";

const LiveTickerZone = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/prices",
          { cache: "no-store" }
        );
        const data = await res.json();
        setPrices(data);
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    };

    fetchPrices();
    // ✅ 15 min — backend se match
    const interval = setInterval(fetchPrices, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Helpers — PriceTable aur Header se same pattern
  const formatChange = (change) => {
    if (change === null || change === undefined || change === 0) return null;
    return `${change > 0 ? "+" : ""}${change}%`;
  };

  const getUp = (change) => {
    if (change > 0) return true;
    if (change < 0) return false;
    return null;
  };

  const marketData = prices
    ? [
        {
          pair: "XAU/USD",
          price: prices.gold_usd?.value
            ? `$${Number(prices.gold_usd.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : "—",
          change: formatChange(prices.gold_usd?.change),
          up: getUp(prices.gold_usd?.change),
        },
        {
          pair: "XAG/USD",
          price: prices.silver_usd?.value
            ? `$${Number(prices.silver_usd.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : "—",
          change: formatChange(prices.silver_usd?.change),
          up: getUp(prices.silver_usd?.change),
        },
        {
          pair: "BTC/USD",
          price: prices.btc_usd?.value
            ? `$${Number(prices.btc_usd.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : "—",
          change: formatChange(prices.btc_usd?.change),
          up: getUp(prices.btc_usd?.change),
        },
        {
          pair: "ETH/USD",
          price: prices.eth_usd?.value
            ? `$${Number(prices.eth_usd.value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : "—",
          change: formatChange(prices.eth_usd?.change),
          up: getUp(prices.eth_usd?.change),
        },
        {
          pair: "EUR/USD",
          price: prices.eur_usd?.value
            ? Number(prices.eur_usd.value).toFixed(4)
            : "—",
          change: formatChange(prices.eur_usd?.change),
          up: getUp(prices.eur_usd?.change),
        },
      ]
    : [
        { pair: "XAU/USD", price: "Loading...", change: null, up: null },
        { pair: "XAG/USD", price: "Loading...", change: null, up: null },
        { pair: "BTC/USD", price: "Loading...", change: null, up: null },
        { pair: "ETH/USD", price: "Loading...", change: null, up: null },
        { pair: "EUR/USD", price: "Loading...", change: null, up: null },
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
              <span
                className={
                  item.up === true
                    ? "text-[#2E7D32] tracking-wider"
                    : item.up === false
                    ? "text-[#C62828] tracking-wider"
                    : "text-[#CCCCCC] tracking-wider"
                }
              >
                {item.price}{" "}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTickerZone;