import jsPDF from "jspdf";

export const generateQuotePDF = (plan) => {
  const doc = new jsPDF();

  doc.setFontSize(24);
  doc.text("Gym Management Proposal", 20, 25);

  doc.setFontSize(18);
  doc.text(`Plan: ${plan.title}`, 20, 45);

  doc.setFontSize(14);
  doc.text(`Price: ${plan.price}`, 20, 60);
  doc.text(`Timeline: ${plan.timeline}`, 20, 75);
  doc.text(`Hosting: ${plan.hosting}`, 20, 90);

  doc.text("Features:", 20, 110);

  let y = 125;

  plan.features.forEach((feature) => {
    doc.text(`• ${feature}`, 25, y);
    y += 12;
  });

  doc.save(`${plan.title}-proposal.pdf`);
};
