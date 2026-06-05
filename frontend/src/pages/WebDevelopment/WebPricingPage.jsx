import { useMemo } from "react";

import { useParams, Link } from "react-router-dom";

import { motion } from "framer-motion";

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

import GymPricing from "../../components/services/gym/GymPricing";
import {
  createWebDevelopmentPricingSlug,
  getWebDevelopmentPricingData,
} from "../../data/webDevelopmentPricingData";

const WebPricingPage = ({ defaultServiceKey = "gym-websites" }) => {
  const { serviceKey } = useParams();
  const resolvedServiceKey = serviceKey || defaultServiceKey;

  const pricingData = useMemo(
    () => getWebDevelopmentPricingData(resolvedServiceKey),
    [resolvedServiceKey]
  );

  const gymServiceKey = createWebDevelopmentPricingSlug("Gym Websites");
  const showGymPricing = pricingData.key === gymServiceKey;

  return (
    <main className="relative overflow-hidden bg-[#F5F7FB] py-30">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="absolute top-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute bottom-[-200px] left-[-150px] h-[440px] w-[440px] rounded-full bg-blue-500/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-700">
            <Sparkles size={16} />
            {pricingData.badge}
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-7xl">
            {pricingData.title}
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            {pricingData.summary}
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[34px] border border-white/50 bg-white/75 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-3xl md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Welcome To
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0B0F19] md:text-4xl">
                {pricingData.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
                This pricing card is now linked directly to its own page, so each web service can
                keep its own price and scope.
              </p>
            </div>

            <div className="rounded-[28px] bg-cyan-500/10 px-6 py-5 md:min-w-[220px]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Starting From
              </p>
              <h3 className="mt-2 text-4xl font-black text-[#0B0F19]">
                {pricingData.startingPrice}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{pricingData.timeline}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pricingData.focusPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/80 px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-sm leading-relaxed text-[#0B0F19]">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/services/web-development"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-600"
            >
              Back to Web Development
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0B0F19] transition-all duration-300 hover:border-cyan-500/20 hover:text-cyan-700"
            >
              Talk to Sales
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.section>

        {showGymPricing ? (
          <div className="mt-16">
            <GymPricing />
          </div>
        ) : (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-4xl rounded-[34px] border border-white/50 bg-white/75 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Custom Scope
            </p>
            <h3 className="mt-4 text-3xl font-black text-[#0B0F19]">
              Detailed pricing for {pricingData.title} can be tailored from this starting point.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              If you want, we can turn this card into a fuller pricing matrix next, keeping the
              same card-name-based structure for every web service.
            </p>
          </motion.section>
        )}
      </div>
    </main>
  );
};

export default WebPricingPage;
