"use client";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Image from "next/image";

const GoldNewsBanner = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async () => {
    if (!email) return;

    if (!isValidEmail(email)) {
      setStatus("invalid");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            source: "scrapMetal",
            gdprConsent: true,
          }),
        },
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="subscribe"
      className="w-full bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[rgba(184,134,11,0.15)] via-[rgba(184,134,11,0.05)] to-transparent" />

      {/* TOP IMAGE */}
      <div className="hidden lg:flex w-30 h-30 absolute top-[30px] right-[120px] bg-[#B8860B] rounded-full items-center justify-center overflow-hidden"></div>
      <div className="hidden lg:block absolute top-[30px] right-[100px]">
        <Image src="/newsbanner/img1.webp" alt="" width={130} height={130} />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center gap-y-5 py-20 sm:py-28 md:py-40 px-6 text-center">
        <h2 className="text-[#FAF8F0] font-bold text-2xl sm:text-3xl md:text-5xl font-[Playfair] leading-snug max-w-4xl">
          {t("Discover the")}{" "}
          <span className="text-[#F7BD48]">{t("Finest Investments")}</span>{" "}
          {t("Inspired by the Strength of Gold & Silver")}
        </h2>

        <p className="text-[#FAF8F0] max-w-sm sm:max-w-2xl md:max-w-2xl md:text-xl">
          {t(
            "Daily market intelligence delivered with editorial precision. Join 45,000+ elite investors.",
          )}
        </p>

        {/* INPUT */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("name@email.com")}
            className="w-full flex-1 mt-5 md:mt-5 px-4 py-2 h-9 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-sm text-gray-800"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full md:mt-5 sm:w-auto border-2 border-[#B8860B] bg-[#B8860B] hover:bg-[#a37709] text-white rounded-lg font-semibold px-6 py-1 transition disabled:opacity-60"
          >
            {loading ? "Loading..." : t("Subscribe")}
          </button>
        </div>

        {/* STATUS */}
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

      {/* BOTTOM IMAGE */}
      <div className="hidden lg:flex w-30 h-30 absolute bottom-[30px] left-[120px] bg-[#B8860B] rounded-full overflow-hidden"></div>

      <div className="hidden lg:block absolute bottom-[30px] left-[130px]">
        <Image src="/newsbanner/img2.webp" alt="" width={115} height={115} />
      </div>
    </section>
  );
};

export default GoldNewsBanner;
