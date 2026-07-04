import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Contact from "../components/common/Contact";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Contact GoldSilver.de for Support and Partnerships",
  description:
    "Reach GoldSilver.de for content questions, partnerships, editorial feedback, and technical support related to our market insights.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
