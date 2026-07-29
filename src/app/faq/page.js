import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { buildMetadata, buildBreadcrumbSchema } from "../seo";
import FaqContent from "./FaqContent";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "FAQ", url: "/faq" },
]);

export const metadata = buildMetadata({
  title: "FAQ – Gold & Silber kaufen, Sicherheit & Support | GoldSilver.de",
  description:
    "Answers about buying physical gold and silver online, market updates, storage, and how to contact the GoldSilver.de team for support or partnerships.",
  path: "/faq",
});
export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <FaqContent />
      <Footer />
    </>
  );
}
