import { Download } from "lucide-react";

import { generateProposalPDF } from "../../../utils/generateProposalPDF";
import WhatsAppQuoteButton from "./WhatsAppQuoteButton";

const ProposalGenerator = ({
  plan,
}) => {
  return (
    <div
      className="
      mt-8

      flex
      flex-col

      gap-3
    "
    >
      <button
        onClick={() => generateProposalPDF(plan)}
        className="
        w-full

        flex
        items-center
        justify-center
        gap-2

        py-4

        rounded-2xl

        bg-gradient-to-r
        from-cyan-500
        to-blue-500

        text-white
        font-semibold

        hover:scale-[1.02]

        transition-all
        duration-300
      "
      >
        <Download size={18} />
        Generate Proposal PDF
      </button>

      <a
        href={plan.pdf}
        target="_blank"
        rel="noreferrer"
        className="
        w-full

        flex
        items-center
        justify-center
        gap-2

        py-4

        rounded-2xl

        border
        border-cyan-500/20

        bg-cyan-500/5

        text-cyan-700
        font-semibold
      "
      >
        <Download size={18} />
        Presskit PDF
      </a>

      <WhatsAppQuoteButton plan={plan} />
    </div>
  );
};

export default ProposalGenerator;

