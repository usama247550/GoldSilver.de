"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Icons changed to match screenshot exactly
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";

const footerSections = [
  {
    title: "Categories",
    links: [
      { name: "macro", href: "/macro" },
      { name: "AiTech", href: "/AiTech" },
      { name: "GreenEnergy", href: "/GreenEnergy" },
      { name: "estate", href: "/estate" },
      { name: "storage", href: "/storage" },
      { name: "coinsBars", href: "/coinsBars" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Market Updates", href: "#" },
      { name: "Learning Resources", href: "#" },
      { name: "Investment Guides", href: "#" },
      { name: "Video Library", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
];

const bottomLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Disclaimer", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const toggle = (title) =>
    setOpenSection((prev) => (prev === title ? null : title));

  return (
    <footer className="w-full bg-[#0E0E0E] text-[#D2C5B1]">
      {/* Main Footer Content */}
      <div className="px-6 py-12 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-10">
          {/* Column 1: Info & Socials */}
          <div className="flex flex-col gap-2 lg:max-w-xs justify-end">
            <p className="text-sm leading-relaxed text-[#D2C5B1]">
              {t(
                "Independent insights covering precious metals, market intelligence, economic trends, and wealth preservation strategies for modern investors.",
              )}
            </p>
            <div className="flex gap-4 ">
              {[FiFacebook, SlSocialTwitter, FiInstagram, FiYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-center border border-[#4A4A4A] rounded-full w-10 h-10 hover:border-[#FDE99A] hover:text-[#FDE99A] transition-colors"
                  >
                    <Icon className="text-lg" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Desktop & Mobile handling for Categories and Resources */}
          {footerSections.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-5 md:gap-4">
              {/* Desktop Title */}
              <div className="hidden md:block text-[#FFFFFF] font-semibold text-lg tracking-widest font-[Playfair_Display]">
                {t(title)}
              </div>

              {/* Mobile Accordion */}
              <div className="border-b border-[#2a2a2a] md:border-none">
                <button
                  className="w-full flex justify-between items-center py-4 md:hidden text-[#FFFFFF] font-semibold text-sm tracking-widest font-[Playfair_Display]"
                  onClick={() => toggle(title)}
                >
                  {t(title)}
                  <span className="text-[#D3C4AF] text-xl leading-none">
                    {openSection === title ? "−" : "+"}
                  </span>
                </button>

                {/* Links (Desktop visible, Mobile conditional) */}
                <div
                  className={`md:flex flex-col gap-4 pb-5 md:pb-0 ${openSection === title ? "flex" : "hidden"}`}
                >
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm text-[#D3C4AF]/90 hover:text-[#FDE99A] transition-colors pl-1 md:pl-0"
                    >
                      {t(link.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Column 4: Stay Connected & Subscribe (Screenshot Match) */}
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <div className="text-[#FFFFFF] font-semibold text-lg tracking-widest font-[Playfair_Display]">
              {t("Stay Connected")}
            </div>
            <p className="text-sm leading-relaxed text-[#D2C5B1]">
              {t(
                "Receive market insights, trend analysis, and precious metals intelligence.",
              )}
            </p>
            {/* The Subscribe Button (Rounded border, specific gold color) */}
            <a
              href="#subscribe"
              className="w-fit text-center border-2 border-[#B8860B] rounded-xl px-11 py-2 text-[#B8860B] font-bold text-md hover:bg-[#B8860B] hover:text-white transition-all"
            >
              {t("Subscribe")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Screenshot Match) */}
      <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 md:gap-[430px] text-xs text-[#D2C5B1] tracking-tight">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            {t("GoldSilver Intelligence. All rights reserved.")}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FDE99A] transition-colors"
              >
                {t(link.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
