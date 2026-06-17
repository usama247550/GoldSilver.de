"use client";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const GoldNewsBanner = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.(com|gmail)$/i.test(email);

  const handleSubscribe = async () => {
    if (!email) return;
    if (!isValidEmail(email)) {
      setStatus("invalid");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            source: "scrap",
            gdprConsent: true,
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="w-full bg-[#1A1A1A] relative overflow-hidden">
        {/* Gold gradient glow from top */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(184, 134, 11, 0.15) 0%, rgba(184, 134, 11, 0.05) 30%, transparent 60%)' }}></div>
        <div className="hidden sm:flex w-16 h-16 md:w-30 md:h-30  absolute top-6 right-6 md:top-[30px] md:right-[80px] lg:right-[120px] bg-[#B8860B] rounded-full items-center justify-center overflow-hidden">
          <img
            src="newsbanner/img1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>


    

        <div className="flex flex-col items-center gap-y-5 py-20 sm:py-28 md:py-40 px-6 text-center">
          <h1 className="text-[#FAF8F0] font-bold text-2xl sm:text-3xl md:text-5xl font-[Playfair] leading-snug max-w-4xl">
            {t("Discover the")}{" "}
            <span className="text-[#F7BD48]">{t("Finest Investments")}</span>{" "}
            {t("Inspired by the Strength of Gold & Silver")}
          </h1>

          <p className="text-[#FAF8F0] max-w-sm sm:max-w-2xl md:max-w-2xl md:text-xl">
            {t(
              "Daily market intelligence delivered with editorial precision. Join 45,000+ elite investors.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("name@email.com")}
              className="w-full sm:w-auto flex-1 px-4 py-2 h-9 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-sm md:text-lg text-gray-800 placeholder:text-gray-500"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto border-2 border-[#B8860B] bg-[#B8860B] hover:bg-[#a37709] text-white  rounded-lg font-semibold px-6 py-[4px]  transition-colors text-md cursor-pointer"
            >
              {t("Subscribe")}
            </button>
          </div>

          {/* Status message */}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              {t("Successfully subscribed! ✅")}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              {t("Something went wrong. Try again.")}
            </p>
          )}
          {status === "invalid" && (
            <p className="text-yellow-400 text-sm">
              {t("Please enter a valid email address.")}
            </p>
          )}
        </div>

        <div className="hidden sm:flex w-16 h-16 md:w-30 md:h-30  absolute bottom-6 left-6 md:bottom-[30px] md:left-[80px] lg:left-[120px] bg-[#B8860B] rounded-full items-center justify-center overflow-hidden">
          <img
            src="newsbanner/img2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default GoldNewsBanner;

