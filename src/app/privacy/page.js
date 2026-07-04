import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Privacy from "../components/common/Privacy";
import { cookies } from "next/headers";
import { buildLocalizedStaticPageMetadata } from "../seo";
import { getStaticPageContent } from "../staticPageContent";

export async function generateMetadata() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  return buildLocalizedStaticPageMetadata("privacy", locale);
}

export default function PrivacyPolicy() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  const content = getStaticPageContent("privacy", locale);

  return (
    <>
      <Header />
      <Privacy content={content} />
      <Footer />
    </>
  );
}
