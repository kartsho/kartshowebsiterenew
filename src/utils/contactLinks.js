export const contactEmails = {
  business: "info@kartsho.com",
  hr: "hr@kartsho.com",
};

export const contactPhones = {
  primary: "+91 9453134901",
  secondary: "+91 9453135182",
};

export const buildMailtoLink = ({
  to = [contactEmails.business],
  cc = [],
  subject = "",
  body = "",
} = {}) => {
  const recipients = Array.isArray(to) ? to.filter(Boolean).join(",") : to;
  const carbonCopy = Array.isArray(cc) ? cc.filter(Boolean).join(",") : cc;

  if (typeof window === "undefined") {
    const params = new URLSearchParams();

    if (carbonCopy) {
      params.set("cc", carbonCopy);
    }

    if (subject) {
      params.set("subject", subject);
    }

    if (body) {
      params.set("body", body);
    }

    const query = params.toString();

    return `mailto:${recipients}${query ? `?${query}` : ""}`;
  }

  const userAgent = window.navigator?.userAgent || "";
  const isMobileDevice =
    window.navigator?.userAgentData?.mobile ||
    /Android|iPhone|iPad|iPod|Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobileDevice) {
    const params = new URLSearchParams();

    if (carbonCopy) {
      params.set("cc", carbonCopy);
    }

    if (subject) {
      params.set("subject", subject);
    }

    if (body) {
      params.set("body", body);
    }

    const query = params.toString();

    return `mailto:${recipients}${query ? `?${query}` : ""}`;
  }

  const gmailParams = new URLSearchParams();

  if (recipients) {
    gmailParams.set("to", recipients);
  }

  if (carbonCopy) {
    gmailParams.set("cc", carbonCopy);
  }

  if (subject) {
    gmailParams.set("su", subject);
  }

  if (body) {
    gmailParams.set("body", body);
  }

  return `https://mail.google.com/mail/?view=cm&fs=1&tf=1&${gmailParams.toString()}`;
};

export const buildProjectInquiryBody = ({
  name = "",
  company = "",
  email = "",
  phone = "",
  service = "",
  budget = "",
  timeline = "",
  message = "",
} = {}) => {
  return [
    "Hi Kartsho Team,",
    "",
    "I would like to enquire about a project.",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    `Timeline: ${timeline}`,
    "",
    "Project details:",
    message,
    "",
    "Please get back to me with the next steps.",
  ]
    .filter((line, index, lines) => line !== "" || lines[index - 1] !== "")
    .join("\n");
};

export const buildGoogleMapsSearchUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
