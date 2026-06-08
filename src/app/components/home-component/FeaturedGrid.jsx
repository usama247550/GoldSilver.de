"use client";
import BigCard from "./BigCard";
import SmallCard, { smallCardsData } from "./SmallCard";
import Link from "next/link";

const FeaturedGrid = () => {
  const topCards = smallCardsData.slice(0, 4);
  const leftCards = smallCardsData.slice(4, 7);
  const rightCards = smallCardsData.slice(7, 10);
  const bottomCards = smallCardsData.slice(10, 12);

  return (
    <div className="w-full md:w-[80%] mx-auto py-3 md:py-8 px-4 md:px-20 flex flex-col gap-y-4">
      {/* Row—top  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {topCards.map((card, i) => (
          <div key={i} className=" h-24 rounded-lg overflow-hidden">
            <Link href={card.href}>
              <SmallCard image={card.image} title={card.title} />
            </Link>
          </div>
        ))}
      </div>

      {/* Middle-Row  left + big center + right  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="hidden md:flex flex-col gap-2">
          {leftCards.map((card, i) => (
            <div key={i} className=" h-24 rounded-lg overflow-hidden">
              <Link href={card.href}>
                <SmallCard image={card.image} title={card.title} />
              </Link>
            </div>
          ))}
        </div>

        <div className="col-span-1 md:col-span-2  h-64 md:h-75 rounded-xl overflow-hidden">
          <BigCard />
        </div>

        <div className="hidden md:flex flex-col gap-2">
          {rightCards.map((card, i) => (
            <div key={i} className=" h-24 rounded-lg overflow-hidden">
              <Link href={card.href}>
                <SmallCard image={card.image} title={card.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/*  bottom-Row */}
      <div className="grid grid-cols-2 gap-3 md:w-[50%] mx-auto w-full">
        {bottomCards.map((card, i) => (
          <div key={i} className=" h-24 rounded-lg overflow-hidden">
            <Link href={card.href}>
              <SmallCard image={card.image} title={card.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrid;
