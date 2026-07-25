"use client";

import { useTranslation } from "react-i18next";
import { buildFaqSchema } from "../seo";

export default function FaqContent() {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t("faq.item1.question"),
      answer: t("faq.item1.answer"),
    },
    {
      question: t("faq.item2.question"),
      answer: t("faq.item2.answer"),
    },
    {
      question: t("faq.item3.question"),
      answer: t("faq.item3.answer"),
    },
    {
      question: t("faq.item4.question"),
      answer: t("faq.item4.answer"),
    },
    {
      question: t("faq.item5.question"),
      answer: t("faq.item5.answer"),
    },
      {
      question: t("faq.item6.question"),
      answer: t("faq.item6.answer"),
    },
  ];

  const faqSchema = buildFaqSchema(faqItems);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#E9E0C9] px-6 py-12 md:px-16 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B8860B]">
            {t("faq.eyebrow")}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white">
            {t("faq.heading")}
          </h1>
          <p className="text-base leading-8 text-[#D3C4AF]">{t("faq.intro")}</p>
        </section>

        {faqItems.map((item) => (
          <section
            key={item.question}
            className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
          >
            <h2 className="text-2xl font-semibold text-white">
              {item.question}
            </h2>
            <p className="text-base leading-8 text-[#D3C4AF]">{item.answer}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
