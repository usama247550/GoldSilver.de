"use client";
import { useTranslation } from "react-i18next";

const LatestUpdateCard = () => {
  const { t } = useTranslation();
  const updatedNews = [
    {
      image: "/news-update-image/image1.png",
      small: "Macro insight",
      heading: "Central Banks Continue Gold Buying Trend",
      decription:
        "Reserve accumulation remains strong as global institutions seek stability amid economic uncertainty.",
    },
    {
      image: "/news-update-image/image2.png",
      small: "Menergy",
      heading: "Solar Expansion Drives Silver Demand Higher",
      decription:
        "Reserve accumulation remains strong as global institutions seek stability amid economic uncertainty.",
    },
    {
      image: "/news-update-image/image1.png",
      small: "Scrap Metal",
      heading: "German Bullion Sales Reach New Monthly High",
      decription:
        "Reserve accumulation remains strong as global institutions seek stability amid economic uncertainty.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:max-w-4xl md:mx-auto">
      {updatedNews.map((val, ind) => (
        <div
          key={ind}
          className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
        >
          <img
            src={val.image}
            alt="Latest update"
            className="w-full h-48 sm:h-52 object-cover rounded-t-xl"
          />
          <div className="p-4 space-y-2 flex flex-col flex-1">
            <p className="text-sm text-[#B8860B] capitalize font-bold">
              {t(val.small)}
            </p>
            <h2 className="text-lg text-gray-800 font-[Playfair] font-semibold leading-snug">
              {t(val.heading)}
            </h2>
            <p className="text-sm text-gray-600 flex-1">{t(val.decription)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestUpdateCard;
