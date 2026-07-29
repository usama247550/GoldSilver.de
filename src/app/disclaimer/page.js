import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Disclaimer from "../components/common/Disclaimer";
import { cookies } from "next/headers";
import { buildLocalizedStaticPageMetadata, buildBreadcrumbSchema } from "../seo";
import { getStaticPageContent } from "../staticPageContent";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Disclaimer", url: "/disclaimer" },
]);

export async function generateMetadata() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  return buildLocalizedStaticPageMetadata("disclaimer", locale);
}

export default function DisclaimerPage() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  const content = getStaticPageContent("disclaimer", locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <Disclaimer content={content} />
      <Footer />
    </>
  );
}
