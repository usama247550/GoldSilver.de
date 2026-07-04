"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LatestUpdateCard = ({ showAll = false, newsItems = [] }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const visibleNews = showAll ? newsItems : newsItems.slice(0, 10);

  const renderCard = (val, ind) => {
    const cardContent = (
      <>
        <div className="relative w-full h-48 sm:h-52">
          <Image
            src={val.image}
            alt={t(val.heading)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />

          {val.badge && (
            <div
              className={`absolute top-4 left-4 px-2.5 py-1 text-xs text-white uppercase tracking-wider ${
                val.badge.type === "bearish" ? "bg-[#C62828]" : "bg-[#2E7D32]"
              }`}
            >
              {val.badge.text} {val.badge.type === "bearish" ? "â–¼" : "â–²"}
            </div>
          )}
        </div>

        <div className="p-4 space-y-2 flex flex-col flex-1">
          <p className="text-sm text-[#B8860B] capitalize font-bold">
            {t(val.small)}
          </p>

          <h3 className="text-lg text-gray-800 font-[Playfair] font-semibold leading-snug">
            {t(val.heading)}
          </h3>

          <p className="text-sm text-black flex-1">{t(val.description)}</p>
        </div>
      </>
    );

    const cardClassName =
      "bg-white shadow-md rounded-xl overflow-hidden flex flex-col";

    if (val.pageUrl) {
      return (
        <Link
          key={ind}
          href={val.pageUrl}
          onContextMenu={(e) => {
            e.preventDefault();
            router.push(val.pageUrl);
          }}
          className={cardClassName}
        >
          {cardContent}
        </Link>
      );
    }

    return (
      <div key={ind} className={cardClassName}>
        {cardContent}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:max-w-5xl md:mx-auto">
      {visibleNews.map((val, ind) => renderCard(val, ind))}
    </div>
  );
};

export default LatestUpdateCard;
