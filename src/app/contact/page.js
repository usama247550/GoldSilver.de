import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Contact from "../components/common/Contact";
import { cookies } from "next/headers";
import { buildLocalizedStaticPageMetadata, buildBreadcrumbSchema } from "../seo";
import { getStaticPageContent } from "../staticPageContent";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
]);

export async function generateMetadata() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  return buildLocalizedStaticPageMetadata("contact", locale);
}

export default function ContactPage() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  const content = getStaticPageContent("contact", locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <Contact content={content} />
      <Footer />
    </>
  );
}
