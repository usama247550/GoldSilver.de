import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Disclaimer from "../components/common/Disclaimer";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Disclaimer and Risk Notice for GoldSilver.de Readers",
  description:
    "Read the GoldSilver.de disclaimer covering informational use only, market risk, external links, and the limits of our editorial content.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <Disclaimer />
      <Footer />
    </>
  );
}
