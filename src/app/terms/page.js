import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Terms from "../components/common/Terms";
import { cookies } from "next/headers";
import { buildLocalizedStaticPageMetadata } from "../seo";
import { getStaticPageContent } from "../staticPageContent";

export async function generateMetadata() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  return buildLocalizedStaticPageMetadata("terms", locale);
}

export default function TermsPage() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  const content = getStaticPageContent("terms", locale);

  return (
    <>
      <Header />
      <Terms content={content} />
      <Footer />
    </>
  );
}
