"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PriceTable = () => {
  const { t } = useTranslation();
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/prices`,
          { cache: "no-store" },
        );
        const data = await res.json();
        if (isMounted) setPrices(data);
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    };

    fetchPrices();

    // ✅ 15 min — backend schedule se match
    const interval = setInterval(fetchPrices, 15 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // ✅ Helper: change se up/down/stable decide karo
  const getDirection = (change) => {
    if (change > 0) return true; // up
    if (change < 0) return false; // down
    return null; // stable
  };

  // ✅ Helper: change display string
  const formatChange = (change) => {
    if (change === 0 || change === null || change === undefined)
      return "STABLE";
    return `${change > 0 ? "+" : ""}${change}%`;
  };

  const priceRows =
    prices && typeof prices === "object"
      ? [
          {
            title: "GOLD / USD (OZ)",
            value: prices.gold_usd?.value
              ? `$${Number(prices.gold_usd.value).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "—",
            change: formatChange(prices.gold_usd?.change),
            up: getDirection(prices.gold_usd?.change),
          },
          {
            title: "SILVER / USD (OZ)",
            value: prices.silver_usd?.value
              ? `$${Number(prices.silver_usd.value).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "—",
            change: formatChange(prices.silver_usd?.change),
            up: getDirection(prices.silver_usd?.change),
          },
          {
            title: "BTC / USD",
            value: prices.btc_usd?.value
              ? `$${Number(prices.btc_usd.value).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "—",
            change: formatChange(prices.btc_usd?.change),
            up: getDirection(prices.btc_usd?.change),
          },
          {
            title: "ETH / USD",
            value: prices.eth_usd?.value
              ? `$${Number(prices.eth_usd.value).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "—",
            change: formatChange(prices.eth_usd?.change),
            up: getDirection(prices.eth_usd?.change),
          },
          {
            title: "EUR / USD",
            value: prices.eur_usd?.value
              ? Number(prices.eur_usd.value).toFixed(4)
              : "—",
            change: formatChange(prices.eur_usd?.change),
            up: getDirection(prices.eur_usd?.change),
          },
          {
            title: "EU INFLATION (CPI)",
            value:
              prices.cpi?.value !== undefined && prices.cpi?.value !== null
                ? `${prices.cpi.value}%`
                : "—",
            // ✅ CPI annual data hai — change 0 hoga usually → STABLE
            change: formatChange(prices.cpi?.change),
            up: getDirection(prices.cpi?.change),
          },
        ]
      : [];

  return (
    <section id="updates" className="col-span-2 p-6 bg-[#F0EEE6] rounded-2xl border border-gray-400">
      <div className="flex items-center gap-2.5 font-[Playfair_Display] text-[#000000] font-bold text-2xl ps-3 pt-2">
       

        <span className="flex items-center justify-center w-6 h-6 rounded-[6px] shadow-sm overflow-hidden">
          <Image
            src="/macro/Icon.webp"
            alt="Live market prices icon"
            width={24}
            height={24}
            className="object-cover"
          />
        </span>
        <span>{t("Live Prices")}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {!prices ? (
          <p className="text-sm text-gray-500">{t("Loading...")}</p>
        ) : (
          priceRows.map((item) => (
            <div
              key={item.title}
              className="border-b border-gray-300 pb-3 last:border-none last:pb-0"
            >
              <div className="flex justify-between items-center">
                <span className="text-[#000000] text-sm font-medium">
                  {t(item.title)}
                </span>

                <div className="flex flex-col items-end">
                  <span className="text-xl text-[#B8860B] tracking-wider">
                    {item.value}
                  </span>

                  {item.change && (
                    <span
                      className={`text-[12px] flex items-center gap-0.5 mt-0.5 tracking-wider ${
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
    </section>
  );
};

export default PriceTable;
