"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const GooglePreferenceButton = () => {
  const { t } = useTranslation();

  return (
    <a href="https://www.google.com/preferences/source?q=https://www.goldsilver.de/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition rounded-md px-4 py-2 text-sm font-semibold">
      <span>{t("googlePreferenceButton")}</span>
    </a>
  );
};

export default GooglePreferenceButton;