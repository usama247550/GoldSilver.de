import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { buildFaqSchema, buildMetadata } from "../seo";

const faqItems = [
  {
    question: "What does GoldSilver.de publish?",
    answer:
      "GoldSilver.de publishes precious metals market commentary, macroeconomic context, and topic pages covering areas such as gold, silver, storage, estate planning, and related investor themes.",
  },
  {
    question: "Is the content financial advice?",
    answer:
      "No. The site is informational only and is intended to help readers understand market trends, educational topics, and broader context. It does not replace professional financial, legal, or tax advice.",
  },
  {
    question: "How often is market data updated?",
    answer:
      "Live market data is refreshed on a recurring schedule through the site's price feeds. News and editorial updates are refreshed as new items are published or synchronized from the backend.",
  },
  {
    question: "Why do some pages cover non-metal topics?",
    answer:
      "The site connects precious metals with adjacent themes such as AI, green energy, storage, and estate planning because those topics can influence demand, supply chains, and long-term wealth strategy.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "Use the Contact page to reach the team for content questions, partnership inquiries, or technical support.",
  },
];

export const metadata = buildMetadata({
  title: "FAQ and Help Center for GoldSilver.de Readers and Support",
  description:
    "Find answers about GoldSilver.de content, market updates, topic coverage, data refreshes, and how to contact the team for support or partnerships.",
  path: "/faq",
});

const faqSchema = buildFaqSchema(faqItems);

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B0B0B] text-[#E9E0C9] px-6 py-12 md:px-16 md:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="mx-auto max-w-5xl space-y-8">
          <section className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[#B8860B]">
              FAQ
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              GoldSilver.de FAQ
            </h1>
            <p className="text-base leading-8 text-[#D3C4AF]">
              Find quick answers about the site, topic coverage, and how the
              market content is organized.
            </p>
          </section>

          {faqItems.map((item) => (
            <section
              key={item.question}
              className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              <h2 className="text-2xl font-semibold text-white">
                {item.question}
              </h2>
              <p className="text-base leading-8 text-[#D3C4AF]">
                {item.answer}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
