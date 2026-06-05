import { generateWhatsAppMessage } from "../../../utils/whatsappMessage";

const WhatsAppQuoteButton = ({
  plan,
}) => {
  const url = `https://wa.me/919453134901?text=${encodeURIComponent(
    generateWhatsAppMessage(plan)
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
      w-full

      flex
      items-center
      justify-center

      py-4

      rounded-2xl

      bg-green-500

      text-white
      font-semibold
    "
    >
      Send On WhatsApp
    </a>
  );
};

export default WhatsAppQuoteButton;

