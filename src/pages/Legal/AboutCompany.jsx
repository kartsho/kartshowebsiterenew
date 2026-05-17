import { Link } from "react-router-dom";

import LegalStrip from "../../components/legal/LegalStrip";
import GrievanceSection from "../../components/legal/GrievanceSection";

const companyDetails = [
  ["Registered Name", "Kartsho Solutions Private Limited"],
  ["CIN", "Add your CIN here"],
  ["GSTIN", "Add your GSTIN here"],
  ["Office", "Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134"],
  ["Support", "info@kartsho.com"],
];

const AboutCompany = () => {
  return (
    <main className="bg-[color:var(--page-bg)]">
      <section className="relative overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-120px] top-[-80px] h-[280px] w-[280px] rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Legal / Company
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-[color:var(--text-primary)] md:text-7xl">
              About the Company
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
              This page holds the formal business identity, compliance notes, and contact
              details that enterprise clients and government platforms often expect.
            </p>
          </div>
        </div>
      </section>

      <LegalStrip />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[36px] border border-black/5 bg-[color:var(--surface)] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl">
            <h2 className="text-3xl font-black text-[color:var(--text-primary)]">
              Business Profile
            </h2>

            <p className="mt-4 text-[color:var(--text-secondary)] leading-relaxed">
              Kartsho operates as a multi-venture digital ecosystem spanning marketing, legal
              tech, education, commerce, media, and counseling. Replace the placeholder
              registration values in this page with verified legal records before going live.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {companyDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-black/5 bg-[color:var(--surface-strong)] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                    {label}
                  </p>
                  <p className="mt-2 font-semibold text-[color:var(--text-primary)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/privacy-policy"
                className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="rounded-full border border-black/10 px-6 py-3 font-semibold text-[color:var(--text-primary)] transition-all duration-300 hover:bg-black/[0.03]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <GrievanceSection />

            <div className="rounded-[32px] border border-black/5 bg-[color:var(--surface)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl">
              <h3 className="text-2xl font-black text-[color:var(--text-primary)]">
                Compliance Note
              </h3>

              <p className="mt-4 text-[color:var(--text-secondary)] leading-relaxed">
                Use this page to publish the final registered company name, CIN, GSTIN, and
                complaint-handling contact so it stays consistent across footer, policy pages,
                and any payment or enterprise onboarding flows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutCompany;
