"use client";
import { useTranslation } from "react-i18next";
const smallCardsData = [
  {
    image: "/grid-images/gridimage1.jpg",
    title: "Macro Tracking",
    href: "/macro",
  },
  {
    image: "/grid-images/gridimage2.jpg",
    title: "Green Energy",
    href: "/GreenEnergy",
  },
  {
    image: "/grid-images/gridimage3.jpg",
    title: "Scrap Metal",
    href: "/scrapMetal",
  },
  {
    image: "/grid-images/gridimage10.jpg",
    title: "Goldsmith",
    href: "/Goldsmithing",
  },
  { image: "/grid-images/gridimage5.jpg", title: "AI & Tech", href: "/AiTech" },
  {
    image: "/grid-images/gridimage6.jpg",
    title: "Home Storage",
    href: "/storage",
  },
  { image: "/grid-images/gridimage7.jpg", title: "Estate", href: "/estate" },
  {
    image: "/grid-images/gridimage8.jpg",
    title: "Numismatics",
    href: "/numismatics",
  },
  {
    image: "/grid-images/gridimage13.jpg",
    title: "Coins & Bars",
    href: "/coinsBars",
  },
  {
    image: "/grid-images/gridimage4.jpg",
    title: "Off-Grid Security",
    href: "/offgrid",
  },
  {
    image: "/grid-images/gridimage12.jpg",
    title: "Jewelry Resale",
    href: "/JewelryResale",
  },
  {
    image: "/grid-images/gridimage9.jpg",
    title: "Metal Detecting",
    href: "/MetalDetecting",
  },
];

const SmallCard = ({ image, title }) => {
  const { t } = useTranslation();
  return (
    <div className="relative h-24 w-full rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={t(title)}
        className="w-full h-full object-cover group-hover:scale-105 transition "
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
        {t(title)}
      </div>
    </div>
  );
};

export { smallCardsData };
export default SmallCard;
