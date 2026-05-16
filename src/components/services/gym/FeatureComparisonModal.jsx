import { useEffect } from "react";

import { X } from "lucide-react";

const FeatureComparisonModal = ({ open, setOpen, plans }) => {
  useEffect(() => {
    if (!open || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[999]

      flex
      items-center
      justify-center

      bg-black/60
      p-4
      backdrop-blur-md
    "
      onClick={() => setOpen(false)}
    >
      <div
        className="
        w-full
        max-w-6xl

        overflow-hidden

        rounded-[32px]

        border
        border-white/30

        bg-white
        p-6
        sm:p-8
        lg:p-10

        shadow-[0_30px_120px_rgba(15,23,42,0.18)]
      "
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Plan Matrix
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#0B0F19] sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              Compare what each plan unlocks before you choose the right gym website package.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-black/5
            bg-[#F7FAFF]
            text-[#0B0F19]
            transition-all
            duration-300
            hover:bg-cyan-500
            hover:text-white
          "
            aria-label="Close comparison modal"
          >
            <X size={20} />
          </button>
        </div>

        <div
          className="
          mt-8
          grid
          gap-4
          md:grid-cols-2
          xl:grid-cols-4
        "
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="
              rounded-[28px]
              border
              border-black/5
              bg-[#F7FAFF]
              p-5
              shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            "
            >
              <div className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                {plan.badge}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#0B0F19]">
                {plan.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {plan.subtitle}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature, index) => (
                  <p
                    key={index}
                    className="rounded-2xl bg-white px-4 py-3 text-sm text-[#0B0F19] shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
                  >
                    ✓ {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureComparisonModal;
