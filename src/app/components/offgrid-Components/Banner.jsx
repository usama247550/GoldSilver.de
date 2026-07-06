"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import Image from "next/image";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-4">
      <div className="w-[92%] md:w-[80%] mx-auto">

        {/* IMAGE WRAPPER */}
        <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden">

          <Image
            src="/offgrid/banner.webp"
            alt="Off-grid security banner"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center gap-y-2 md:gap-y-3 ps-5 sm:ps-8 md:ps-10 pr-5 sm:pr-[45%]">

            <div className="bg-[#F7BD48] text-black rounded-sm text-xs sm:text-sm py-1 w-fit px-3">
              {t("Off-Grid Security")}
            </div>

            <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl font-[Playfair_Display] leading-snug">
              {t("Off-Grid Security &")} <br />
              {t("Tactical Homesteading")}
            </h1>

            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
              {t("Discover practical preparedness strategies, fractional precious metals, and self-reliance solutions for uncertain economic environments.")}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
