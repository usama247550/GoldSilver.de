"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import Image from "next/image";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-4">
      <div className="my-3 w-[90%] md:w-[80%] mx-auto">

        {/* IMAGE WRAPPER */}
        <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden">

          <Image
            src="/Goldsmithing/banner.jpg"
            alt="image"
            fill
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center gap-y-2 md:gap-y-3 ps-5 sm:ps-8 md:ps-10 pr-5 sm:pr-[45%]">

            <div className="bg-[#F7BD48] text-black rounded-sm text-xs sm:text-sm py-1 w-fit px-3">
              {t("Goldsmithing")}
            </div>

            <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl font-[Playfair_Display] leading-snug">
              {t("Artisanal Goldsmithing & Custom Bench Jewelry")}
            </h1>

            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
              {t("Explore traditional techniques and modern innovation in goldsmith craftsmanship.")}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;