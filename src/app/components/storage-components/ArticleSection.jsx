"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import GooglePreferenceButton from "../common/GooglePreferenceButton";
import { buildArticleSchema } from "../../seo";
const ArticleSection = () => {
  const { t } = useTranslation();
const articleSchema = buildArticleSchema({
  headline: "Bullion Vault vs. Home Storage: Securing Your Precious Metals",
  description: "Secure your precious metals in a trusted bullion vault. Explore storage, logistics, and capital preservation themes shaping the precious metals market for long-term investors.",
  path: "/storage",
});
  return (
    <div className="w-full bg-white py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-[#1A1A1A] font-bold text-2xl md:text-3xl font-[Playfair_Display] mb-4">
          {t("storageArticleTitle")}
        </h2>

        <div className="mb-6">
          <GooglePreferenceButton />
        </div>

        <div className="text-[#333333] text-base leading-relaxed space-y-4">
          <p>{t("storagePara1")}</p>
          <p>{t("storagePara2")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("storageSubhead1")}</h3>
          <p>{t("storagePara3")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("storageSubhead2")}</h3>
          <p>{t("storagePara4")}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;