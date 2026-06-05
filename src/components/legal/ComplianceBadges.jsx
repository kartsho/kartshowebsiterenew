import {
  BadgeCheck,
  Building2,
  ShieldCheck,
} from "lucide-react";

const complianceItems = [
  {
    icon: Building2,
    title: "MCA Registered",
    detail: "CIN: Add your CIN here",
    accent: "cyan",
  },
  {
    icon: BadgeCheck,
    title: "GST Verified",
    detail: "GSTIN: Add your GSTIN here",
    accent: "green",
  },
  {
    icon: ShieldCheck,
    title: "Grievance Ready",
    detail: "Response within 30 days",
    accent: "blue",
  },
];

const accentStyles = {
  cyan: "bg-cyan-500/10 text-cyan-600",
  green: "bg-emerald-500/10 text-emerald-600",
  blue: "bg-blue-500/10 text-blue-600",
};

const ComplianceBadges = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {complianceItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-[28px]
              border
              border-black/5
              bg-[color:var(--surface-strong)]
              p-6
              shadow-[0_14px_45px_rgba(15,23,42,0.08)]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  ${accentStyles[item.accent]}
                `}
              >
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[color:var(--text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ComplianceBadges;
