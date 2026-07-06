import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Disclaimer from "../components/common/Disclaimer";
import { cookies } from "next/headers";
import { buildLocalizedStaticPageMetadata } from "../seo";
import { getStaticPageContent } from "../staticPageContent";

export async function generateMetadata() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  return buildLocalizedStaticPageMetadata("disclaimer", locale);
}

export default function DisclaimerPage() {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
  const content = getStaticPageContent("disclaimer", locale);

  return (
    <>
      <Header />
      <Disclaimer content={content} />
      <Footer />
    </>
  );
}
