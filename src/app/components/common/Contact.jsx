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
            <a
              href="mailto:sales@optimier.it"
              className="block text-base leading-8 text-[#D3C4AF] hover:text-[#FDE99A]"
            >
              sales@optimier.it
            </a>
            <a
              href="mailto:support@optimier.it"
              className="block text-base leading-8 text-[#D3C4AF] hover:text-[#FDE99A]"
            >
              support@optimier.it
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{content.phone}</h2>
            <a
              href="tel:+4915228900221"
              className="text-base leading-8 text-[#D3C4AF] hover:text-[#FDE99A]"
            >
              +49 152 28900221
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{content.address}</h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              MÃ¼hlenweg 10f, 15344 Strausberg, Berlin
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
