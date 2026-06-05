import { Link } from "react-router-dom";

import LegalStrip from "../../components/legal/LegalStrip";

const terms = [
  {
    title: "Acceptance of terms",
    body: "By using this website or engaging our services, you agree to these terms and to comply with applicable laws and regulations.",
  },
  {
    title: "Use of services",
    body: "Service scope, timelines, commercial terms, and deliverables are defined through written proposals, contracts, statements of work, or invoices.",
  },
  {
    title: "Intellectual property",
    body: "Unless otherwise agreed in writing, content, designs, code, and deliverables remain subject to the ownership and licensing terms described in the project agreement.",
  },
  {
    title: "Limitation of liability",
    body: "We aim to provide reliable services, but liability is limited to the extent permitted by law and the governing project agreement.",
  },
];

const TermsConditions = () => {
  return (
    <main className="bg-[color:var(--page-bg)]">
      <section className="relative overflow-hidden px-6 pb-10 pt-28">
        <div className="absolute right-[-120px] top-[-80px] h-[280px] w-[280px] rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Legal / Terms
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-[color:var(--text-primary)] md:text-7xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
              These terms explain how the website and services may be used, and they help keep
              business expectations clear for both the company and the client.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/privacy-policy"
                className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                Privacy Policy
              </Link>

              <Link
                to="/about-company"
                className="rounded-full border border-black/10 px-6 py-3 font-semibold text-[color:var(--text-primary)] transition-all duration-300 hover:bg-black/[0.03]"
              >
                About Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LegalStrip />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-black/5 bg-[color:var(--surface)] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {terms.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-black/5 bg-[color:var(--surface-strong)] p-6">
                <h2 className="text-2xl font-black text-[color:var(--text-primary)]">
                  {item.title}
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--text-secondary)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
