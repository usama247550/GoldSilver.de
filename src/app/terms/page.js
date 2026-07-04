import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Terms from "../components/common/Terms";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Terms of Service and Usage Rules for GoldSilver.de",
  description:
    "Understand the terms that govern access to GoldSilver.de content, including permitted use, accuracy limits, and liability notices.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <Terms />
      <Footer />
    </>
  );
}
