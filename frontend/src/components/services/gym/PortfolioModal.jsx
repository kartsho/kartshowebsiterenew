import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowUpRight, Globe, X } from "lucide-react";

const PortfolioModal = ({ open, onClose, items }) => {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Gym portfolio links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            onClick={(event) => event.stopPropagation()}
            className="
            w-full
            max-w-6xl

            overflow-hidden

            rounded-[32px]

            border
            border-white/20

            bg-[#07111f]
            text-white

            shadow-[0_30px_120px_rgba(0,0,0,0.45)]
          "
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  <Globe size={14} />
                  Portfolio
                </div>
                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Live Websites Built By Kartsho
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                  These are the live company websites and venture links currently available in the
                  portfolio. If you want only gym-client projects here, we can swap this list to the
                  exact URLs anytime.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-2xl

                border
                border-white/10

                bg-white/5

                text-white
                transition-all
                duration-300
                hover:bg-white/10
              "
                aria-label="Close portfolio"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group

                  rounded-[28px]

                  border
                  border-white/10

                  bg-white/5
                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/10
                "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                        {item.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">
                        {item.name}
                      </h3>
                    </div>

                    <span className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:border-cyan-400/30">
                    Visit Website
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
