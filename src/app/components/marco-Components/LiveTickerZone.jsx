

import React from "react";

const LiveTickerZone = () => {
  const marketData = [
    {
      pair: "XAU/USD",
      price: "2,341.20",
      change: "+0.4%",
      color: "text-[#2E7D32]",
    },
    {
      pair: "XAG/USD",
      price: "28.45",
      change: "+0.2%",
      color: "text-[#C62828]",
    },
    {
      pair: "BTC/USD",
      price: "2,341.20",
      change: "+0.4%",
      color: "text-[#2E7D32]",
    },
    {
      pair: "XAU/USD",
      price: "2,341.20",
      change: "+0.4%",
      color: "text-[#2E7D32]",
    },
    {
      pair: "XAG/USD",
      price: "28.45",
      change: "+0.2%",
      color: "text-[#C62828]",
    },
    {
      pair: "BTC/USD",
      price: "2,341.20",
      change: "+0.4%",
      color: "text-[#2E7D32]",
    },
  ];

  return (
    <div className="bg-[#0E0E0E] w-full overflow-hidden ">
      <div className="hidden sm:flex flex-wrap gap-5 md:gap-7 text-sm justify-center py-5 px-4">
        {marketData.map((item, index) => (
          <div
            key={index}
            className="font-[JetBrains_Mono] text-[#CCCCCC] font-medium whitespace-nowrap"
          >
            {item.pair}:{" "}
            <span className={item.color}>
              {item.price} {item.change}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden sm:hidden py-3 relative">
        <div className="flex gap-8 animate-ticker whitespace-nowrap">
          {[...marketData, ...marketData].map((item, index) => (
            <div
              key={index}
              className="font-[JetBrains_Mono] text-[#CCCCCC] font-medium text-xs inline-block"
            >
              {item.pair}:{" "}
              <span className={item.color}>
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