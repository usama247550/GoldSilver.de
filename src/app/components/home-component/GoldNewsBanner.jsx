"use client";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Image from "next/image";

const GoldNewsBanner = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  // better validation (real-world safe)
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
            source: "home-page",
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="subscribe"
      className="w-full bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(184,134,11,0.15) 0%, rgba(184,134,11,0.05) 30%, transparent 60%)",
        }}
      />

      <div className="hidden lg:flex w-30 h-30 absolute top-[30px] right-[120px] bg-[#B8860B] rounded-full items-center justify-center overflow-hidden"></div>
      <div className="hidden lg:block absolute top-[30px] right-[100px]">
        <Image src="/newsbanner/img1.png" alt="icon" width={130} height={130} />
      </div>
      {/* bottom glow */}
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(247,189,72,0.25) 0%, rgba(247,189,72,0.12) 35%, transparent 70%)",
        }}
      />

      {/* content */}
      <div className="flex flex-col items-center gap-y-5 py-20 sm:py-28 md:py-40 px-6 text-center">
        <h1 className="text-[#FAF8F0] font-bold text-2xl sm:text-3xl md:text-5xl font-[Playfair] leading-snug max-w-4xl">
          {t("Discover the")}{" "}
          <span className="text-[#F7BD48]">{t("Finest Investments")}</span>{" "}
          {t("Inspired by the Strength of Gold & Silver")}
        </h1>

        <p className="text-[#FAF8F0] max-w-sm sm:max-w-2xl md:text-xl">
          {t(
            "Daily market intelligence delivered with editorial precision. Join 45,000+ elite investors.",
          )}
        </p>

        {/* input */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("name@email.com")}
            className="w-full flex-1 mt-5 md:mt-5 px-4 py-2 h-9 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-sm text-gray-800 placeholder:text-gray-400"
          />

          <button
            onClick={handleSubscribe}
            className="w-full md:mt-5 sm:w-auto border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-lg font-semibold px-6 py-[4px] transition-colors cursor-pointer"
          >
            {t("Subscribe")}
          </button>
        </div>

        {/* status */}
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

      {/* bottom icon */}

      <div className="hidden lg:flex w-30 h-30 absolute bottom-[30px] left-[120px] bg-[#B8860B] rounded-full overflow-hidden"></div>

      <div className="hidden lg:block absolute bottom-[30px] left-[130px]">
        <Image src="/newsbanner/img2.png" alt="icon" width={115} height={115} />
      </div>
    </section>
  );
};

export default GoldNewsBanner;
