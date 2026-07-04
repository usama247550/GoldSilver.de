import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Contact from "../components/common/Contact";
import { cookies } from "next/headers";
import { buildLocalizedStaticPageMetadata } from "../seo";
import { getStaticPageContent } from "../staticPageContent";

export async function generateMetadata() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  return buildLocalizedStaticPageMetadata("contact", locale);
}

export default function ContactPage() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  const content = getStaticPageContent("contact", locale);

  return (
    <>
      <Header />
      <Contact content={content} />
      <Footer />
    </>
  );
}
