export const generateSchoolWhatsAppMessage = (plan) =>
  plan.whatsappText ||
  `Hi Kartsho, I want ${plan.title} school proposal.

Price: ${plan.price}
Timeline: ${plan.timeline}

Please share full quotation.`;
