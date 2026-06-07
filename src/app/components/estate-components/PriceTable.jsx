import React from "react";

const PriceTable = () => {
  const marketStats = [
    {
      title: "GOLD / USD (OZ)",
      value: "$2,342.12",
      change: "+0.42%",
      color: "text-green-600",
    },
    {
      title: "SILVER / USD (OZ)",
      value: "$28.15",
      change: "-0.12%",
      color: "text-red-600",
    },
    {
      title: "GOLD / USD (OZ)",
      value: "$2,342.12",
      change: "+0.42%",
      color: "text-green-600",
    },
    {
      title: "SILVER / USD (OZ)",
      value: "$28.15",
      change: "-0.12%",
      color: "text-red-600",
    },
    {
      title: "EU INFLATION (CPI)",
      value: "2.4%",
      change: "STABLE",
      color: "text-yellow-500",
    },
  ];
  return (
    <>
      <div className="col-span-2 p-6 bg-[#F0EEE6] rounded-2xl">
        <div className="font-[Playfair_Display] text-[#000000] font-bold text-2xl ps-3 pt-2">
          Live Prices
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          {marketStats.map((item, index) => (
            <div key={index} className="border-b border-gray-300 ">
              <div className="flex justify-between items-center">
                <span className="text-[#000000] text-sm">{item.title}</span>

                <span className="font-semibold text-lg text-[#B8860B]">
                  {item.value}
                </span>
              </div>

              <div
                className={`mt-2 text-sm font-medium text-end ${item.color}`}
              >
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceTable;
