"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

const PriceTable = () => {
  const { t } = useTranslation();
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prices`)
      .then(res => res.json())
      .then(data => setPrices(data))
      .catch(err => console.error('Price fetch error:', err));
  }, []);

  const priceRows = prices ? [
    { title: "GOLD / USD (OZ)",   value: `$${prices.gold_usd?.toLocaleString()}` },
    { title: "SILVER / USD (OZ)", value: `$${prices.silver_usd?.toLocaleString()}` },
    { title: "BTC / USD",         value: `$${prices.btc_usd?.toLocaleString()}` },
    { title: "ETH / USD",         value: `$${prices.eth_usd?.toLocaleString()}` },
    { title: "EUR / USD",         value: `${prices.eur_usd?.toFixed(4)}` },
  ] : [];

  return (
    <div className="col-span-2 p-6 bg-[#F0EEE6] rounded-2xl">
      <div className="font-[Playfair_Display] text-[#000000] font-bold text-2xl ps-3 pt-2">
        {t("Live Prices")}
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {prices === null ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          priceRows.map((item, index) => (
            <div key={item.title} className="border-b border-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-[#000000] text-sm">{t(item.title)}</span>
                <span className="font-semibold text-lg text-[#B8860B]">{item.value}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PriceTable;