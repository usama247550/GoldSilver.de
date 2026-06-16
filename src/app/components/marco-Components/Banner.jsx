
"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const Banner = () => {
  const { t } = useTranslation();

  return (
    // FULL WIDTH BACKGROUND
    <div className="w-full bg-white py-4 ">

      {/* CENTER CONTENT */}
      <div className="relative w-[90%] md:max-w-7xl mx-auto">

        <img
          src="/macro/banner.jpg"
          alt="image"
          className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-2xl md:rounded-3xl"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-2xl md:rounded-3xl" />

        <div className="absolute inset-0 flex flex-col justify-center gap-y-2 md:gap-y-3 ps-5 sm:ps-8 md:ps-10 pr-5 sm:pr-[45%]">

          <div className="bg-[#F7BD48]  text-[#080808] rounded-sm text-xs sm:text-sm text-center py-1 w-fit px-3">
            {t("Macro Tracing")}
          </div>

          <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl leading-snug  font-[Playfair_Display]">
            {t("Central Bank Macro-Tracking & Geopolitical Forecasting")}
          </h1>

          <p className="text-white text-xs  sm:text-sm md:text-base leading-relaxed">
            {t("Analyze central bank buying trends, geopolitical shifts, and currency developments impacting the global precious metals market.")}
            
            
          </p>


        </div>
      </div>
    </div>
  );
};

export default Banner;