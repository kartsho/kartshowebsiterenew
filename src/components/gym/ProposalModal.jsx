import { motion, AnimatePresence } from "framer-motion";

import { X } from "lucide-react";

const ProposalModal = ({
  open = false,
  onClose,
  title = "Proposal",
  subtitle = "Your custom gym proposal",
  children,
}) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl rounded-[32px] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-[#0B0F19] transition-all hover:bg-black/10"
          >
            <X size={18} />
          </button>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {subtitle}
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#0B0F19]">{title}</h3>

          <div className="mt-6">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProposalModal;
