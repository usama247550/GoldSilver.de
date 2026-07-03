import React from "react";

const Disclaimer = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#E9E0C9] px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B8860B]">
            Disclaimer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white">
            GoldSilver.de Disclaimer
          </h1>
          <p className="text-base leading-8 text-[#D3C4AF]">
            The content on GoldSilver.de is provided for informational purposes
            only and does not constitute financial, investment, legal, or tax
            advice.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-semibold text-white">
            No Investment Advice
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            GoldSilver.de does not offer personalized investment
            recommendations. Any decisions you make based on the information
            provided on this website are solely your own responsibility.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            Accuracy of Information
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            We strive to keep our content accurate and up to date, but we cannot
            guarantee that all information is complete, current, or error-free.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">External Links</h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            GoldSilver.de may include links to third-party sites. These links
            are provided for convenience only, and we are not responsible for
            the privacy practices or content of external websites.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            Limitation of Liability
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            To the fullest extent permitted by law, GoldSilver.de and its owners
            are not liable for any losses or damages arising from the use of
            this site or reliance on its content.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">
            User Responsibility
          </h2>
          <p className="text-base leading-8 text-[#D3C4AF]">
            Users should conduct their own research and consult qualified
            professionals before making any financial or legal decisions.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Disclaimer;
