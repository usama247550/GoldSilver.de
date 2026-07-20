"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const ArticleSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-[#1A1A1A] font-bold text-2xl md:text-3xl font-[Playfair_Display] mb-6">
          {t("scrapMetalArticleTitle")}
        </h2>

        <div className="text-[#333333] text-base leading-relaxed space-y-4">
          <p>{t("scrapMetalPara1")}</p>
          <p>{t("scrapMetalPara2")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("scrapMetalSubhead1")}</h3>
          <p>{t("scrapMetalPara3")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("scrapMetalSubhead2")}</h3>
          <p>{t("scrapMetalPara4")}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;