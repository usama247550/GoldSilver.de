"use client";
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/macro", label: "Macro",  },
  { href: "/AiTech", label: "AI & Tech" },
  { href: "/storage", label: "Storage" },
  { href: "/estate", label: "Estate" },
  { href: "/GreenEnergy", label: "Green Energy" },
  { href: "/scrapMetal", label: "Scrap Metal" },
  { href: "/offgrid", label: "Off Grid" },
  { href: "/numismatics", label: "Numismatics" },
  { href: "/coinsBars", label: "Coins & Bars" },
];

const tickers = [
  { label: "XAU/USD", value: "2,341.20 +0.4%", up: true },
  { label: "XAG/USD", value: "28.45 +0.2%", down: true },
  { label: "BTC/USD", value: "2,341.20 +0.4%", up: true },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1A1A1A]">
      <div className="flex justify-between items-center px-5 md:px-10 h-16">
        <Link
          href="/"
          className="font-[Playfair_Display] font-bold text-[#FDE99A] text-xl"
        >
          GoldSilver.de
        </Link>

        <div className="hidden md:flex gap-7 text-sm">
          {tickers.map(({ label, value, up }) => (
            <div
              key={label}
              className="font-[JetBrains_Mono] text-[#CCCCCC] font-medium"
            >
              {label}:{" "}
              <span className={up ? "text-[#2E7D32]" : "text-[#C62828]"}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <CiSearch className="text-white text-2xl cursor-pointer" />
          <Link
            href="#"
            className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-lg font-bold px-4 py-1 text-sm md:text-lg transition-colors"
          >
            Subscribe
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

      <div className="hidden flex flex-col gap-1 px-5 pb-3 border-t border-[#2a2a2a] pt-3">
        {tickers.map(({ label, value, up }) => (
          <div
            key={label}
            className="font-[JetBrains_Mono] text-[#CCCCCC] text-xs font-medium"
          >
            {label}:{" "}
            <span className={up ? "text-[#2E7D32]" : "text-[#C62828]"}>
              {value}
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
                className="text-[#B8860B] text-md hover:text-[#FDE99A] transition-colors"
              >
                {label}
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
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
