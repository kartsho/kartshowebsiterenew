import { useMemo, useState } from "react";

import { BarChart3 } from "lucide-react";

import { gymPricingPlans } from "../../../data/gymPricingPlans";
import CurrencyToggle from "./CurrencyToggle";
import PricingCard from "./PricingCard";
import AIPriceEstimator from "./AIPriceEstimator";
import ROICalculator from "./ROICalculator";
import FeatureComparisonModal from "./FeatureComparisonModal";

const GymPricing = () => {
  const [currency, setCurrency] = useState("INR");
  const [openModal, setOpenModal] = useState(false);

  const plans = gymPricingPlans[currency];

  const featuredPlan = useMemo(
    () => plans.find((plan) => plan.highlighted) || plans[0],
    [plans]
  );

  return (
    <section
      id="pricing"
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]
      py-28
      scroll-mt-24
    "
    >
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/75 px-5 py-3 text-sm font-semibold text-cyan-700 shadow-[0_10px_40px_rgba(6,182,212,0.08)] backdrop-blur-xl">
            <BarChart3 size={16} />
            Gym Pricing
          </div>

          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-7xl">
            Pick the plan that fits
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              your gym growth.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Every tier includes downloadable proposals, WhatsApp inquiry flow, ROI guidance, and
            feature comparison. Switch currency to compare Indian and global pricing.
          </p>

          <CurrencyToggle currency={currency} setCurrency={setCurrency} />

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm text-gray-600 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
            Starting from{" "}
            <span className="font-semibold text-[#0B0F19]">{featuredPlan.price}</span>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <AIPriceEstimator />
          <ROICalculator
            investment={featuredPlan.roi.investment}
            monthlyRevenue={featuredPlan.roi.monthlyRevenue}
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="
            inline-flex
            items-center
            gap-2

            rounded-2xl

            bg-[#0B0F19]
            px-8
            py-4

            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-cyan-600
          "
          >
            <BarChart3 size={18} />
            Compare All Plans
          </button>

          <p className="max-w-xl text-sm leading-relaxed text-gray-500">
            Use the comparison table to quickly see which plan unlocks which automation and
            fitness-management features.
          </p>
        </div>

        <FeatureComparisonModal
          open={openModal}
          setOpen={setOpenModal}
          plans={plans}
        />
      </div>
    </section>
  );
};

export default GymPricing;
