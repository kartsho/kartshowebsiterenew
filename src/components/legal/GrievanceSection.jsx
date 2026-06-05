import { Mail, Clock3, ShieldAlert } from "lucide-react";

const grievanceItems = [
  {
    icon: Mail,
    label: "Email",
    value: "grievance@kartsho.com",
  },
  {
    icon: Clock3,
    label: "Response Time",
    value: "Within 30 days of receipt",
  },
  {
    icon: ShieldAlert,
    label: "Designation",
    value: "Grievance Officer",
  },
];

const GrievanceSection = () => {
  return (
    <section
      id="grievance-officer"
      className="
        rounded-[32px]
        border
        border-black/5
        bg-[color:var(--surface)]
        p-6
        shadow-[0_14px_45px_rgba(15,23,42,0.08)]
        backdrop-blur-3xl
      "
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
          Grievance Officer
        </p>

        <h3 className="mt-2 text-2xl font-black text-[color:var(--text-primary)]">
          Support and complaint handling
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {grievanceItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-black/5
                bg-[color:var(--surface-strong)]
                p-5
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                    {item.label}
                  </p>

                  <p className="mt-1 font-semibold text-[color:var(--text-primary)]">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GrievanceSection;
