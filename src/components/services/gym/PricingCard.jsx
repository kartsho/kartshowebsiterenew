import { BarChart3, Check, Crown } from "lucide-react";

import { calculateROI } from "../../../utils/roiCalculator";
import ProposalGenerator from "./ProposalGenerator";

const PricingCard = ({ plan }) => {
  const roiMonths = calculateROI(
    plan.roi.investment,
    plan.roi.monthlyRevenue
  );

  return (
    <article
      className={`
      group
      relative

      overflow-hidden

      rounded-[32px]

      border

      p-6

      backdrop-blur-3xl

      transition-all
      duration-500

      ${
        plan.highlighted
          ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 shadow-[0_20px_80px_rgba(6,182,212,0.18)]"
          : "border-white/40 bg-white/75 shadow-[0_18px_70px_rgba(0,0,0,0.08)]"
      }
    `}
    >
      {plan.highlighted && (
        <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(6,182,212,0.32)]">
          <Crown size={14} />
          Best Value
        </div>
      )}

      <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700">
        {plan.badge}
      </div>

      <h3 className="mt-5 text-2xl font-black text-[#0B0F19]">
        {plan.title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {plan.subtitle}
      </p>

      <div className="mt-7">
        <h4 className="text-4xl font-black leading-tight text-[#0B0F19]">
          {plan.price}
        </h4>

        <p className="mt-2 text-sm text-gray-500">
          {plan.hosting}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-1 text-cyan-600">
              <Check size={17} />
            </div>

            <p className="text-sm leading-relaxed text-gray-700">
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-black/[0.03] px-5 py-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          Timeline
        </p>

        <h4 className="mt-1 font-bold text-[#0B0F19]">
          {plan.timeline}
        </h4>
      </div>

      <div className="mt-6 rounded-2xl bg-cyan-50 p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#0B0F19]">
          <BarChart3 size={18} />
          ROI Recovery Estimate
        </div>

        <h4 className="mt-3 text-3xl font-black text-cyan-700">
          {roiMonths} Months
        </h4>
      </div>

      <ProposalGenerator plan={plan} />
    </article>
  );
};

export default PricingCard;
