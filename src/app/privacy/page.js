import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B0B0B] text-[#E9E0C9] px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          <section className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[#B8860B]">
              Privacy Policy
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              GoldSilver.de Privacy Policy
            </h1>
            <p className="text-base leading-8 text-[#D3C4AF]">
              At GoldSilver.de, your trust matters. This privacy policy
              describes how we collect, use, and protect information when you
              visit our website.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white">
              Information We Collect
            </h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              GoldSilver.de is primarily an informational platform focused on
              precious metals, market intelligence, and wealth preservation
              topics. We do not require users to register or submit personal
              information to read our content.
            </p>
            <p className="text-base leading-8 text-[#D3C4AF]">
              We may collect limited technical data automatically when you visit
              our site, such as:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-[#D3C4AF]">
              <li>Browser type and version</li>
              <li>IP address and device information</li>
              <li>Pages visited and time spent on the website</li>
            </ul>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
            <h2 className="text-2xl font-semibold text-white">
              How We Use Information
            </h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              We use technical data to improve the website experience, measure
              performance, and better understand which content resonates with
              our audience. This helps us maintain a reliable source of market
              insights and educational resources.
            </p>
            <p className="text-base leading-8 text-[#D3C4AF]">
              We do not share personal information with third parties for
              advertising purposes. When we use third-party analytics tools, the
              data is aggregated and anonymized.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
            <h2 className="text-2xl font-semibold text-white">
              Cookies and Tracking
            </h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              GoldSilver.de may use cookies and similar tracking technologies to
              improve site performance, remember your preferences, and analyze
              traffic patterns.
            </p>
            <p className="text-base leading-8 text-[#D3C4AF]">
              You can disable cookies in your browser settings, but some website
              features may not work as intended if cookies are blocked.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
            <h2 className="text-2xl font-semibold text-white">
              Third-Party Links
            </h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              Our site may include links to external resources or partnering
              services. These third-party sites have their own privacy practices
              and are not governed by this policy.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              We take reasonable steps to protect the information collected on
              GoldSilver.de, but no system is completely secure. We continuously
              review our technical and organizational safeguards to keep our
              site safe.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              If you have questions about your privacy or wish to request
              information about the data we collect, please visit our Contact
              page and get in touch.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">
            <h2 className="text-2xl font-semibold text-white">
              Updates to This Policy
            </h2>
            <p className="text-base leading-8 text-[#D3C4AF]">
              We may update this privacy policy as the site evolves. The date of
              the latest revision will be reflected on this page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
