const WhatsAppQuoteButton = ({
  plan,
}) => {
  const message = `
Hello Team,

I'm interested in the ${
    plan.title
  } plan.

Price: ${plan.price}

Please share full quotation.
  `;

  return (
    <a
      href={`https://wa.me/9453134901?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
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

      hover:scale-[1.02]

      transition-all
      duration-300
    "
    >
      Send WhatsApp Inquiry
    </a>
  );
};

export default WhatsAppQuoteButton;
