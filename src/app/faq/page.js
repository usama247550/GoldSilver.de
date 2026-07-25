import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { buildMetadata } from "../seo";
import FaqContent from "./FaqContent";

export const metadata = buildMetadata({
  title: "FAQ – Gold & Silber kaufen, Sicherheit & Support | GoldSilver.de",
  description:
    "Answers about buying physical gold and silver online, market updates, storage, and how to contact the GoldSilver.de team for support or partnerships.",
  path: "/faq",
});
export default function FAQPage() {
  return (
    <>
      <Header />
      <FaqContent />
      <Footer />
    </>
  );
}
