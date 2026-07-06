import React from "react";

const Terms = ({ content }) => {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#E9E0C9] px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B8860B]">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white">
            {content.heading}
          </h1>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.intro}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-semibold text-white">
            {content.acceptanceTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            {content.acceptanceBody}
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.contentTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.contentBody1}</p>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.contentBody2}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.siteTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.siteBody1}</p>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.siteBody2}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.warrantyTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.warrantyBody1}</p>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.warrantyBody2}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.liabilityTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.liabilityBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.ipTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.ipBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.changesTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.changesBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.contactTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.contactBody}</p>
        </section>
      </div>
    </main>
  );
};

export default Terms;
