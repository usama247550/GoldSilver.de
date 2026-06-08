"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const GoldNewsBanner = () => {
  const { t } = useTranslation();
  return (
    <>
     
      <div className="w-full bg-[#1A1A1A] relative overflow-hidden">
        <div className="hidden sm:flex w-16 h-16 md:w-20 md:h-20 absolute top-6 right-6 md:top-[30px] md:right-[80px] lg:right-[120px] bg-[#B8860B] rounded-full items-center justify-center overflow-hidden">
          <img
            src="newsbanner/img1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-y-5 py-20 sm:py-28 md:py-40 px-6 text-center">
          <h1 className="text-[#FAF8F0] font-bold text-2xl sm:text-3xl md:text-5xl font-[Playfair] leading-snug max-w-4xl">
            {t("Discover the")} <span className=" text-[#F7BD48]">{t("Finest Investments")}</span> {t("Inspired by the Strength of Gold & Silver")}
          </h1>

          <p className="text-[#FAF8F0] text-sm max-w-sm sm:max-w-md">
            {t("Daily market intelligence delivered with editorial precision. Join 45,000+ elite investors.")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-sm">
            <input
              type="email"
              placeholder={t("name@email.com")}
              className="w-full sm:w-auto flex-1 px-4 py-2 h-9 border bg-white  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-sm text-gray-800 placeholder:text-gray-400"
            />
            <button className="w-full sm:w-auto border-2 border-[#B8860B] bg-[#B8860B] text-white  rounded-lg font-semibold px-6 py-1.5 transition-colors text-md cursor-pointer">{t("Subscribe")}</button>
          </div>
        </div>

        <div className="hidden sm:flex w-16 h-16 md:w-20 md:h-20 absolute bottom-6 left-6 md:bottom-[30px] md:left-[80px] lg:left-[120px] bg-[#B8860B] rounded-full items-center justify-center overflow-hidden">
          <img
            src="newsbanner/img2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default GoldNewsBanner;
