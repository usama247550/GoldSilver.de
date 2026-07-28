"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import Image from "next/image";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-4">
      <div className="w-[92%] md:w-[80%] mx-auto">
        
        <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
          
          <Image
            src="/aiTech/banner.webp"
            alt="AI and tech market analysis banner"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center gap-y-2 md:gap-y-3 ps-5 sm:ps-8 md:ps-10 pr-5 sm:pr-[45%]">
            
            <div className="bg-[#F7BD48] text-black rounded-sm text-xs sm:text-sm py-1 w-fit px-3">
              {t("AI and Tech")}
            </div>

            <h1 className="text-white font-[Playfair_Display] font-bold text-xl sm:text-3xl md:text-4xl leading-snug">
              {t("AI, Semiconductors")} <br />
              {t("& Tech-Industrial Demand")}
            </h1>

            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
              {t("Track how AI infrastructure, semiconductor manufacturing, and advanced technologies are increasing industrial demand for precious metals.")}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
