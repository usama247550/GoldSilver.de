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
  const [searchOpen, setSearchOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [prices, setPrices] = useState(null);

  const pathname = usePathname();

  // ================= PRICE FETCH =================
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
        console.error(err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // ================= SEARCH API (DEBOUNCE) =================
  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${query}`,
        );

        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  // ================= PRICE FORMAT =================
  const formatChange = (change) => {
    if (!change || change === 0) return null;
    return `${change > 0 ? "+" : ""}${change}%`;
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  const tickers = prices
    ? [
        {
          label: "XAU/USD",
          value: prices.gold_usd?.value
            ? `$${Number(prices.gold_usd.value).toLocaleString()}`
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
            ? `$${Number(prices.silver_usd.value).toLocaleString()}`
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
            ? `$${Number(prices.btc_usd.value).toLocaleString()}`
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
    : [];

  return (
    <header className="w-full bg-[#1A1A1A] relative">
      {/* ================= TOP BAR ================= */}
      <div className="sticky top-0 z-50 flex justify-between items-center px-5 md:px-10 h-16">
        {/* LOGO */}
        <Link
          href="/"
          className={`font-bold text-[#FDE99A] text-xl ${
            searchOpen ? "hidden sm:block" : ""
          }`}
        >
          GoldSilver.de
        </Link>

        {/* DESKTOP TICKERS */}
        <div className="hidden md:flex gap-7 text-sm">
          {tickers.map(({ label, value, change, up }) => (
            <div key={label} className="text-[#ccc]">
              {t(label)}:
              <span
                className={
                  up === true
                    ? "text-green-500 ml-2"
                    : up === false
                      ? "text-red-500 ml-2"
                      : "ml-2"
                }
              >
                {value} {change}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative">
          {/* SEARCH */}
          <div className="hidden md:flex items-center relative">
            {!searchOpen ? (
              <CiSearch
                className="text-white text-2xl cursor-pointer"
                onClick={() => setSearchOpen(true)}
              />
            ) : (
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => setSearchOpen(false)}
                placeholder="Search Gold, BTC..."
                className="bg-black text-white border border-gray-700 px-3 py-1 rounded-md w-56 outline-none"
              />
            )}

            {/* DROPDOWN */}
            {searchOpen && query && (
              <div className="absolute top-10 right-0 w-64 bg-[#111] border border-gray-700 rounded-md z-50">
                {loading && (
                  <div className="p-2 text-gray-400 text-sm">Loading...</div>
                )}

                {!loading && results.length === 0 && (
                  <div className="p-2 text-gray-400 text-sm">No results</div>
                )}

                {results.map((item) => (
                  <div
                    key={item.key}
                    className="p-2 flex justify-between hover:bg-gray-800 cursor-pointer text-white"
                  >
                    <span>{item.name}</span>
                    <span className="text-[#B8860B]">${item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LANGUAGE */}
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          {/* SUBSCRIBE */}
          <Link
            href="#subscribe"
            className="border-2 border-[#B8860B] text-[#B8860B] px-4 py-1 rounded-lg text-sm md:text-base"
          >
            {t("Subscribe")}
          </Link>

          {/* MENU */}
          <button
            className="md:hidden text-[#B8860B] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:flex justify-center items-center h-14 border-t border-[#2a2a2a]">
        <ul className="flex gap-8 lg:gap-12">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-[#B8860B] text-md transition-colors
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:transition-all after:duration-300
                ${
                  pathname === href
                    ? "text-[#FDE99A] after:w-full after:bg-[#FDE99A]"
                    : "hover:text-[#FDE99A] after:w-0 hover:after:w-full hover:after:bg-[#FDE99A]"
                }`}
              >
                {t(label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        
        <div className="md:hidden   fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-[#1A1A1A] border-t border-gray-700 px-5 py-4 overflow-y-auto z-50">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[rgba(184,134,11,0.15)] via-[rgba(184,134,11,0.05)] to-transparent" />
          {/* SEARCH */}
          <div className="flex items-center border border-gray-600 rounded-md px-3">
            <CiSearch className="text-white text-xl" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent text-white px-2 py-3 outline-none"
            />
          </div>

          {/* LINKS */}
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-[#B8860B] py-5 border-b border-gray-800"
            >
              {t(label)}
            </Link>
          ))}

          {/* LANGUAGE */}
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
};

export default Header;
