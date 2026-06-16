"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

const PriceTable = () => {
  const { t } = useTranslation();
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prices`)
      .then((res) => res.json())
      .then((data) => setPrices(data))
      .catch((err) => console.error("Price fetch error:", err));
  }, []);

  const priceRows = prices
    ? [
        {
          title: "GOLD / USD (OZ)",
          value: prices.gold_usd ? `$${prices.gold_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—",
          change: "+0.42%",
          up: true,
        },
        {
          title: "SILVER / USD (OZ)",
          value: prices.silver_usd ? `$${prices.silver_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—",
          change: "-0.12%",
          up: false,
        },
        {
          title: "BTC / USD",
          value: prices.btc_usd ? `$${prices.btc_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—",
          change: "+2.1%",
          up: true,
        },
        {
          title: "ETH / USD",
          value: prices.eth_usd ? `$${prices.eth_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—",
          change: "+1.5%",
          up: true,
        },
        {
          title: "EUR / USD",
          value: prices.eur_usd ? `${prices.eur_usd.toFixed(4)}` : "—",
          change: "-0.2%",
          up: false,
        },
        {
          title: "EU INFLATION (CPI)",
          value: prices.inflation_de ? `${prices.inflation_de}%` : "2.4%",
          change: "STABLE",
          up: null,
        },
      ]
    : [];

  return (
    <div className="col-span-2 p-6 bg-[#F0EEE6] rounded-2xl border border-gray-400">
      <div className="flex items-center gap-2.5 font-[Playfair_Display] text-[#000000] font-bold text-2xl ps-3 pt-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-[6px]  shadow-sm">
          <img src="/macro/icon.png" alt="" />
        </span>
        <span>{t("Live Prices")}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {prices === null ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          priceRows.map((item, index) => (
            <div key={item.title} className="border-b border-gray-300 pb-3 last:border-none last:pb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#000000] text-sm font-medium">{t(item.title)}</span>
                <div className="flex flex-col items-end">
                  <span className="text-xl text-[#B8860B] tracking-wider">
                    {item.value}
                  </span>
                  {item.change && (
                    <span
                      className={`text-[12px]  flex items-center gap-0.5 mt-0.5 tracking-wider ${
                        item.up === true
                          ? "text-[#2E7D32]"
                          : item.up === false
                          ? "text-[#C62828]"
                          : "text-[#666666] font-[JetBrains_Mono] text-[10px] uppercase font-bold"
                      }`}
                    >
                      {item.up === true && "▲ "}
                      {item.up === false && "▼ "}
                      {t(item.change)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PriceTable;
