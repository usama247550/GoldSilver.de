import React from "react";

const Privacy = ({ content }) => {
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
          <h2 className="text-2xl font-semibold text-white">{content.infoTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.infoBody1}</p>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.infoBody2}</p>
          <ul className="ml-6 list-disc space-y-2 text-[#D3C4AF]">
            {content.infoItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.useTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.useBody1}</p>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.useBody2}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.cookiesTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            {content.cookiesBody1}
          </p>
          <p className="text-base leading-8 text-[#D3C4AF]">
            {content.cookiesBody2}
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.linksTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.linksBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            {content.securityTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.securityBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">{content.rightsTitle}</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.rightsBody}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            {content.updatesTitle}
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">{content.updatesBody}</p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
