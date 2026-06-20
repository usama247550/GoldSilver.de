"use client";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { href: "/macro", label: "Macro" },
  { href: "/AiTech", label: "AI & Tech" },
  { href: "/storage", label: "Storage" },
  { href: "/estate", label: "Estate" },
  { href: "/GreenEnergy", label: "Green Energy" },
  { href: "/scrapMetal", label: "Scrap Metal" },
  { href: "/offgrid", label: "Off Grid" },
  { href: "/numismatics", label: "Numismatics" },
  { href: "/coinsBars", label: "Coins & Bars" },
];

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prices, setPrices] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/prices`,
          { cache: "no-store" },
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

  // ✅ Helper — same jo PriceTable mein use kiya
  const formatChange = (change) => {
    if (!change || change === 0) return null; // header mein STABLE nahi dikhayenge
    return `${change > 0 ? "+" : ""}${change}%`;
  };

  const tickers = prices
    ? [
        {
          label: "XAU/USD",
          value: prices.gold_usd?.value
            ? `$${Number(prices.gold_usd.value).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : "—",
          change: formatChange(prices.gold_usd?.change),
          up:
            prices.gold_usd?.change > 0
              ? true
              : prices.gold_usd?.change < 0
                ? false
                : null,
        },
        {
          label: "XAG/USD",
          value: prices.silver_usd?.value
            ? `$${Number(prices.silver_usd.value).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : "—",
          change: formatChange(prices.silver_usd?.change),
          up:
            prices.silver_usd?.change > 0
              ? true
              : prices.silver_usd?.change < 0
                ? false
                : null,
        },
        {
          label: "BTC/USD",
          value: prices.btc_usd?.value
            ? `$${Number(prices.btc_usd.value).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : "—",
          change: formatChange(prices.btc_usd?.change),
          up:
            prices.btc_usd?.change > 0
              ? true
              : prices.btc_usd?.change < 0
                ? false
                : null,
        },
      ]
    : [
        { label: "XAU/USD", value: "Loading...", change: null, up: null },
        { label: "XAG/USD", value: "Loading...", change: null, up: null },
        { label: "BTC/USD", value: "Loading...", change: null, up: null },
      ];

  return (
    <header className="w-full bg-[#1A1A1A]">
      <div className="sticky top-0 z-50 bg-[#1A1A1A] flex justify-between items-center px-5 md:px-10 h-16">
        <Link
          href="/"
          className="font-[Playfair_Display] font-bold text-[#FDE99A] text-xl"
        >
          GoldSilver.de
        </Link>

        <div className="hidden md:flex gap-7 text-sm">
          {tickers.map(({ label, value, change, up }) => (
            <div
              key={label}
              className="font-[JetBrains_Mono] text-[#CCCCCC] font-medium"
            >
              {t(label)}:{" "}
              <span
                className={
                  up === true
                    ? "text-[#2E7D32] ml-1.5"
                    : up === false
                      ? "text-[#C62828] ml-1.5"
                      : "text-[#CCCCCC] ml-1.5"
                }
              >
                {value} {change}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden sm:block">
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-4">
          <CiSearch className="text-white text-2xl cursor-pointer" />
          <Link
            href="#"
            className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-lg font-bold px-4 py-1 text-sm md:text-lg transition-colors"
          >
            {t("Subscribe")}
          </Link>

          <button
            className="md:hidden text-[#B8860B] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile tickers */}
      <div className="hidden  flex md:hidden flex-col gap-1 px-5 pb-3 border-t border-[#2a2a2a] pt-3">
        {tickers.map(({ label, value, change, up }) => (
          <div
            key={label}
            className="font-[JetBrains_Mono] text-[#CCCCCC] text-xs font-medium"
          >
            {t(label)}:{" "}
            <span
              className={`tracking-wider ${
                up === true
                  ? "text-[#2E7D32]"
                  : up === false
                    ? "text-[#C62828]"
                    : "text-[#CCCCCC]"
              }`}
            >
              {value}{" "}
              {change && (
                <>
                  {up === true ? "▲" : up === false ? "▼" : ""} {change}
                </>
              )}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-center items-center h-14 border-t border-[#2a2a2a]">
        <ul className="flex gap-8 lg:gap-12">
          {navLinks.map(({ href, label }) => (
        

            <li key={href}>
              <Link
                href={href}
                className={`relative text-[#B8860B] text-md transition-colors
      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300

      ${
        pathname === href
          ? "text-[#FDE99A] after:w-full after:bg-[#FDE99A]"
          : "hover:text-[#FDE99A] after:w-0 hover:after:w-full hover:after:bg-[#FDE99A]"
      }
    `}
              >
                {t(label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-[#2a2a2a] px-5 pb-4">
          <ul className="flex flex-col">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-[#B8860B] py-3 text-[15px] border-b border-[#2a2a2a] last:border-none hover:text-[#FDE99A] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(label)}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
