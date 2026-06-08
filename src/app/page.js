import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import FeaturedGrid from "./components/home-component/FeaturedGrid";
import GoldNewsBanner from "./components/home-component/GoldNewsBanner";
import LatestUpdates from "./components/home-component/LatestUpdates";

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
