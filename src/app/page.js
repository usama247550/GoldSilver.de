import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import FeaturedGrid from "./components/home-component/FeaturedGrid";
import GoldNewsBanner from "./components/home-component/GoldNewsBanner";
import LatestUpdates from "./components/home-component/LatestUpdates";
import { buildMetadata } from "./seo";

export const metadata = buildMetadata({
  title: "GoldSilver.de – Ihr Goldsilbermarkt für Gold & Silber Preise",
  description:
    "GoldSilver.de ist Ihr vertrauenswürdiger Goldsilbermarkt für tägliche Marktanalysen zu Gold und Silber. Daily precious metals intelligence, market analysis, and investor-focused updates.",
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
