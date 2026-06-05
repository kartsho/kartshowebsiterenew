import ComplianceBadges from "./ComplianceBadges";

const LegalStrip = () => {
  return (
    <section
      id="legal-strip"
      className="
        relative
        z-10
        px-6
        pb-8
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[36px]
          border
          border-black/5
          bg-[color:var(--surface)]
          p-6
          shadow-[0_20px_70px_rgba(15,23,42,0.08)]
          backdrop-blur-3xl
          lg:p-8
        "
      >
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Verification Strip
            </p>

            <h2 className="mt-2 text-2xl font-black text-[color:var(--text-primary)]">
              Compliance and business details
            </h2>
          </div>

          <p className="max-w-2xl text-sm text-[color:var(--text-secondary)]">
            Keep the registered company name, CIN, GSTIN and grievance contact updated with
            verified legal details before launch.
          </p>
        </div>

        <ComplianceBadges />

        <p className="mt-6 text-sm text-[color:var(--text-secondary)]">
          All registrations should be verifiable on the respective government portals.
        </p>
      </div>
    </section>
  );
};

export default LegalStrip;
