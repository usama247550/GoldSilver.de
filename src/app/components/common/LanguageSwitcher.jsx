"use client";

import i18n from "../../i18n";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language || "de");

  useEffect(() => {
    const handleChange = (lng) => setLang(lng);
    i18n.on("languageChanged", handleChange);
    return () => i18n.off("languageChanged", handleChange);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1 border border-[#B8860B]/30 rounded-lg p-0.5 bg-black/40">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage("en");
        }}
        className={`px-3 py-1.5 rounded-md text-[15px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          lang === "en"
            ? "bg-[#B8860B] text-white shadow-sm"
            : "text-[#CCCCCC] hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage("de");
        }}
        className={`px-3 py-1.5 rounded-md text-[15px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          lang === "de"
            ? "bg-[#B8860B] text-white shadow-sm"
            : "text-[#CCCCCC] hover:text-white hover:bg-white/10"
        }`}
      >
        DE
      </button>
    </div>
  );
}
