import { Link } from "react-router-dom";

import LegalStrip from "../../components/legal/LegalStrip";

const sections = [
  {
    title: "Eligibility for refunds",
    body: "Refund requests are reviewed based on the signed proposal, project stage, and the deliverables already completed at the time of cancellation.",
  },
  {
    title: "Non-refundable work",
    body: "Completed discovery, design, development, licensing, third-party services, and other consumable work items may not be refundable once delivered or initiated.",
  },
  {
    title: "How to request a refund",
    body: "Send your order details, invoice reference, and reason for the request to the support contact listed on our company page so the team can review it.",
  },
  {
    title: "Decision timeline",
    body: "We aim to respond within a reasonable period after receiving a complete request and may approve a full, partial, or no refund depending on the project terms.",
  },
];

const RefundPolicy = () => {
  return (
    <main className="bg-[color:var(--page-bg)]">
      <section className="relative overflow-hidden px-6 pb-10 pt-28">
        <div className="absolute left-[-120px] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-120px] top-[-60px] h-[260px] w-[260px] rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Legal / Refunds
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-[color:var(--text-primary)] md:text-7xl">
              Refund Policy
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
              This page explains how refund requests are handled for proposals, projects, and
              related services so expectations stay clear on both sides.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about-company"
                className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                About Company
              </Link>

              <Link
                to="/privacy-policy"
                className="rounded-full border border-black/10 px-6 py-3 font-semibold text-[color:var(--text-primary)] transition-all duration-300 hover:bg-black/[0.03]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LegalStrip />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-black/5 bg-[color:var(--surface)] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-black/5 bg-[color:var(--surface-strong)] p-6"
              >
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
      </section>
    </main>
  );
};

export default RefundPolicy;
