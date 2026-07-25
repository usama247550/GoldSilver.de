"use client";
import React from "react";

const NewsCardTrackable = ({ item, children }) => {
  const handleClick = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${item._id}/click`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Click tracking failed:", err);
    }

    if (item.sourceUrl) {
      window.open(item.sourceUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default NewsCardTrackable;
