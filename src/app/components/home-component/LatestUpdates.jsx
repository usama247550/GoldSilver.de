

import LatestUpdatesClient from "./LatestUpdatesClient";

const LatestUpdates = async () => {
  let allNews = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/latest?limit=12`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      allNews = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch news:", err);
  }

  return <LatestUpdatesClient allNews={allNews} />;
};

export default LatestUpdates;