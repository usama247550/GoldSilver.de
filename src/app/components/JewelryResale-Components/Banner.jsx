"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="my-3 w-[90%] md:w-[80%] mx-auto relative font-[P layfair_Display] ">
        <img
          src="/JewelryResale/banner.png"
          alt="image"
          className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-2xl md:rounded-3xl"
        />

        <div className=" absolute inset-0 bg-gradient-to-r from-[#000000] to-[#66666600] rounded-2xl  md:rounded-3xl" />

        <div className="absolute inset-0 flex flex-col justify-center gap-y-2 md:gap-y-3 ps-5 sm:ps-8 md:ps-10 pr-5 sm:pr-[45%]">
          <div className="bg-[#F7BD48] text-[#000000] rounded-sm text-xs sm:text-sm text-center py-1 w-fit px-3">{t("Jewelry Resale")}</div>
          <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl leading-snug">{t("Luxury Jewelry Finds")} <br /> {t("New Life Through Resale")}</h1>
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">{t("Track scrap metal trends, recovery markets, and industrial recycling developments.")}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
