import React from "react";

const Contact = ({ content }) => {
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

        <section className="space-y-6 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{content.email}</h2>
            <a href="mailto:support@goldsilver.de" className="block text-base leading-8 text-[#D3C4AF] hover:text-[#FDE99A]">support@goldsilver.de</a>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{content.phone}</h2>
            <a href="tel:+4933413804726" className="text-base leading-8 text-[#D3C4AF] hover:text-[#FDE99A]">+49 (0) 3341 3804726</a>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{content.address}</h2>
            <p className="text-base leading-8 text-[#D3C4AF]">Mühlenweg 10f, 15344 Strausberg, Deutschland</p>
          </div>
        </section>

        <section id="imprint" className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-semibold text-white">{content.imprintTitle}</h2>
          <div className="text-base leading-8 text-[#D3C4AF] space-y-1">
            <p>Reiko Mras - Finanzcoach</p>
            <p>Mühlenweg 10f</p>
            <p>15344 Strausberg</p>
            <p>Deutschland</p>
            <p>{content.phoneLabel}: +49 (0) 3341 3804726</p>
            <p>{content.emailLabel}: support@goldsilver.de</p>
            {/* <p className="pt-3 text-sm text-[#8a8a8a]">USt-IdNr.: DE349888568</p> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;