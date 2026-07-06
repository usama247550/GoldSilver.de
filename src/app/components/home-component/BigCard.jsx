"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const BigCard = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-64 md:h-75 rounded-xl overflow-hidden group">
      
      {/* Image Fix */}
      <Image
        src="/grid-images/gridimage1.webp"
        alt="Gold surges as central banks increase reserves"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white space-y-1">
        
        <p className="text-xs bg-[#F7BD48] md:text-md font-semibold px-2 py-1 w-fit rounded text-black">
          {t("Macro Tracing")}
        </p>

        <h2 className="text-base md:text-2xl font-semibold font-[Playfair_Display]">
          {t("Gold Surges as Central Banks Increase Strategic Reserves")}
        </h2>

        <p className="text-sm text-[#FAF8F0] max-w-[90%] line-clamp-2 md:line-clamp-3">
          {t(
            "As central banks accelerate their shift back to physical reserves, we explore why gold remains the ultimate hedge against systemic volatility."
          )}
        </p>

        <button className="mt-1 text-xs border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-3 py-1 rounded">
          {t("Read More")}
        </button>
      </div>
    </div>
  );
};

export default BigCard;
