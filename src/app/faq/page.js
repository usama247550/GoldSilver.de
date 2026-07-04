import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { buildMetadata } from "../seo";
import FaqContent from "./FaqContent";

export const metadata = buildMetadata({
  title: "FAQ and Help Center for GoldSilver.de Readers and Support",
  description:
    "Find answers about GoldSilver.de content, market updates, topic coverage, data refreshes, and how to contact the team for support or partnerships.",
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
