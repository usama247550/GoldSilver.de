import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import FeaturedGrid from "./components/home-component/FeaturedGrid";
import GoldNewsBanner from "./components/home-component/GoldNewsBanner";
import LatestUpdates from "./components/home-component/LatestUpdates";
import { buildMetadata } from "./seo";


export const metadata = buildMetadata({
  title: "Goldsilbermarkt – Gold & Silber Preise, Markets & Insights | GoldSilver.de",
  description:
    "Ihr Goldsilbermarkt für tägliche Marktanalysen zu Gold und Silber. Daily precious metals intelligence, market analysis, and investor-focused updates across gold, silver, macro trends, and wealth preservation.",
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
