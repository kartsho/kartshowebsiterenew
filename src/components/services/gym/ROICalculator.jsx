import { calculateROI } from "../../../utils/roiCalculator";

const ROICalculator = ({
  investment = 100000,
  monthlyRevenue = 25000,
}) => {
  return (
    <div
      className="
      rounded-[32px]

      border
      border-white/60

      bg-white/80
      p-8
      sm:p-10

      shadow-[0_20px_80px_rgba(15,23,42,0.08)]
      backdrop-blur-3xl
    "
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
        ROI Snapshot
      </p>

      <h3 className="mt-4 text-3xl font-black text-[#0B0F19]">
        ROI Calculator
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
        This shows a simple payback view for the selected plan, so you can quickly understand how
        the website investment may recover through leads and memberships.
      </p>

      <div className="mt-8 grid gap-3">
        <div className="rounded-2xl bg-[#F7FAFF] px-4 py-3 text-sm text-gray-600">
          <span className="font-semibold text-[#0B0F19]">Investment:</span> ₹
          {investment.toLocaleString()}
        </div>

        <div className="rounded-2xl bg-[#F7FAFF] px-4 py-3 text-sm text-gray-600">
          <span className="font-semibold text-[#0B0F19]">Monthly Revenue:</span> ₹
          {monthlyRevenue.toLocaleString()}
        </div>
      </div>

      <div className="mt-8 rounded-[24px] bg-gradient-to-r from-slate-900 to-slate-800 p-5 text-white">
        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Payback Period
        </h4>

        <div className="mt-3 text-4xl font-black sm:text-5xl">
          {calculateROI(investment, monthlyRevenue)} Months
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
