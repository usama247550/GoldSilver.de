"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaEarthEurope } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const footerSections = [
  {
    title: "INTELLIGENCE",
    links: [
      "Market Insights",
      "Precious Metals",
      "Digital Assets",
      "Indices Forecast",
    ],
  },
  {
    title: "EDITORIAL",
    links: [
      "Market Insights",
      "Precious Metals",
      "Digital Assets",
      "Indices Forecast",
    ],
  },
  {
    title: "SUPPORT",
    links: [
      "Market Insights",
      "Precious Metals",
      "Digital Assets",
      "Indices Forecast",
    ],
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const toggle = (title) =>
    setOpenSection((prev) => (prev === title ? null : title));

  return (
    <>
      <div className="w-full bg-[#0E0E0E] px-6 py-10 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-8">
          <div className="flex flex-col gap-3 md:w-[22%]">
            <div className="font-[Playfair_Display] font-bold text-[#F7BD48] text-xl">{t("GoldSilver.de")}</div>
            <p className="text-[#D3C4AF] text-sm leading-relaxed">
              {t("© 2024 GoldSilver.de Intelligence. All rights reserved. Precise market data for the modern investor.")}
            </p>
            <div className="flex gap-3 mt-1">
              <FaEarthEurope className="text-[#D3C4AF] text-lg" />
              <FaWifi className="text-[#D3C4AF] text-lg" />
              <MdOutgoingMail className="text-[#D3C4AF] text-lg" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex gap-12 lg:gap-28">
            {footerSections.map(({ title, links }) => (
              <div key={t(title)} className="flex flex-col gap-3">
                <div className="text-[#F7BD48] font-bold text-sm tracking-wider">
                  {t(title)}
                </div>
                {links.map((link) => (
                  <div
                    key={t(link)}
                    className="text-[#D3C4AF] text-sm cursor-pointer hover:text-[#FDE99A] transition-colors"
                  >
                    {t(link)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden border-t border-[#2a2a2a]">
            {footerSections.map(({ title, links }) => (
              <div key={t(title)} className="border-b border-[#2a2a2a]">
                <button
                  className="w-full flex justify-between items-center py-4 text-[#F7BD48] font-bold text-sm tracking-wider"
                  onClick={() => toggle(title)}
                >
                  {t(title)}
                  <span className="text-[#D3C4AF] text-lg leading-none">
                    {openSection === title ? "−" : "+"}
                  </span>
                </button>
                {openSection === title && (
                  <div className="flex flex-col gap-3 pb-4">
                    {links.map((link) => (
                      <div key={t(link)} className="text-[#D3C4AF] text-sm pl-1">
                        {t(link)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-[#D3C4AF] text-xs text-center bg-[#0E0E0E] py-5 border-t border-[#2a2a2a] tracking-widest">
        {t("AUTHORITATIVE FINANCIAL INTELLIGENCE SINCE 1998")}
      </div>
    </>
  );
};

export default Footer;
