import { Link } from "react-router-dom";

import GrievanceSection from "../../components/legal/GrievanceSection";
import LegalStrip from "../../components/legal/LegalStrip";

const sections = [
  {
    title: "Information we collect",
    body: "We may collect contact details, business information, and usage data submitted through forms, service inquiries, newsletter signups, or project discovery calls.",
  },
  {
    title: "How we use data",
    body: "Data is used to respond to enquiries, provide services, improve support, and operate the website. We do not sell personal information.",
  },
  {
    title: "Sharing and disclosure",
    body: "We share data only when required for service delivery, legal compliance, or trusted operational support such as hosting, analytics, or communications providers.",
  },
  {
    title: "Retention and security",
    body: "We retain information only as long as needed for service, compliance, and legitimate business purposes, and we apply reasonable technical and organizational safeguards.",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="bg-[color:var(--page-bg)]">
      <section className="relative overflow-hidden px-6 pb-10 pt-28">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-120px] top-[-60px] h-[260px] w-[260px] rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Legal / Privacy
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-[color:var(--text-primary)] md:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
              Kartsho Solutions Private Limited respects your privacy and handles information in
              line with applicable Indian laws and reasonable security practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about-company"
                className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                About Company
              </Link>

              <Link
                to="/terms-and-conditions"
                className="rounded-full border border-black/10 px-6 py-3 font-semibold text-[color:var(--text-primary)] transition-all duration-300 hover:bg-black/[0.03]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LegalStrip />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[36px] border border-black/5 bg-[color:var(--surface)] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl">
            <div className="space-y-8">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-black text-[color:var(--text-primary)]">
                    {section.title}
                  </h2>

                  <p className="mt-4 leading-relaxed text-[color:var(--text-secondary)]">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <GrievanceSection />

            <div className="rounded-[32px] border border-black/5 bg-[color:var(--surface)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl">
              <h3 className="text-2xl font-black text-[color:var(--text-primary)]">
                Contact for privacy matters
              </h3>

              <p className="mt-4 text-[color:var(--text-secondary)] leading-relaxed">
                For data access, correction, deletion, or privacy-related questions, contact the
                grievance officer listed on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
