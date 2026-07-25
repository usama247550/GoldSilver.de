"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import GooglePreferenceButton from "../common/GooglePreferenceButton";
import { buildArticleSchema } from "../../seo";
const ArticleSection = () => {
  const { t } = useTranslation();
const articleSchema = buildArticleSchema({
  headline: "The Recycled Metal Market: Recovering Value from Scrap Gold and Silver",
  description: "Explore the recycled metal market including recycling, recovery, and industrial scrap flows that create new value opportunities for gold, silver, and other precious metals.",
  path: "/scrapMetal",
});
  return (
    <div className="w-full bg-white py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-[#1A1A1A] font-bold text-2xl md:text-3xl font-[Playfair_Display] mb-4">
          {t("scrapMetalArticleTitle")}
        </h2>

        <div className="mb-6">
          <GooglePreferenceButton />
        </div>

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