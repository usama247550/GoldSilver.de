import React from "react";

const Disclaimer = ({ content }) => {
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
            {content.noAdviceTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.noAdviceBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            {content.accuracyTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.accuracyBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.linksTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.linksBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            {content.liabilityTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.liabilityBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            {content.responsibilityTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            {content.responsibilityBody}
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            {content.affiliateTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.affiliateBody}</p>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.affiliateBody2}</p>
        </section>
      </div>
    </main>
  );
};

export default Disclaimer;