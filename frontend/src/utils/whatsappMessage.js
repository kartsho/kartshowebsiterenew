export const generateWhatsAppMessage = (plan) =>
  plan.whatsappText ||
  `
Hi Kartsho, I want ${plan.title} proposal.

Price: ${plan.price}
Timeline: ${plan.timeline}

Please share full quotation.
`;
