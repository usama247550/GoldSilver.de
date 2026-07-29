import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Terms from "../components/common/Terms";

import { cookies } from "next/headers";

import {
  buildLocalizedStaticPageMetadata,
  buildBreadcrumbSchema,
} from "../seo";

import { getStaticPageContent } from "../staticPageContent";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Terms of Service", url: "/terms" },
]);

export async function generateMetadata() {
  const cookieStore = await cookies();

  const locale =
    cookieStore.get("gs-lang")?.value === "de"
      ? "de"
      : "en";

  return buildLocalizedStaticPageMetadata("terms", locale);
}

export default async function TermsPage() {
  const cookieStore = await cookies();

  const locale =
    cookieStore.get("gs-lang")?.value === "de"
      ? "de"
      : "en";

  const content = getStaticPageContent("terms", locale);

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />

      <Header />

      <main>
        <Terms content={content} />
      </main>

      <Footer />
    </>
  );
}
