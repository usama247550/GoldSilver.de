import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import FeaturedGrid from "./components/home-component/FeaturedGrid";
import GoldNewsBanner from "./components/home-component/GoldNewsBanner";
import LatestUpdates from "./components/home-component/LatestUpdates";
import { buildMetadata } from "./seo";

export const metadata = buildMetadata({
  title: "GoldSilver.de | Precious Metals, Markets & Insights",
  description:
    "Daily precious metals intelligence, market analysis, and investor-focused updates across gold, silver, macro trends, and wealth preservation.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <FeaturedGrid />
      <GoldNewsBanner />
      <LatestUpdates/>
      <Footer />
    </>
  );
}
