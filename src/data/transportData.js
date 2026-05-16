import simplePDF from "../assets/transportpdf/TMS Proposal Simple.pdf";
import mediumPDF from "../assets/transportpdf/TMS Proposal Medium.pdf";
import advancedPDF from "../assets/transportpdf/TMS Proposal Advanced.pdf";
import premiumPDF from "../assets/transportpdf/TMS Proposal Premium.pdf";

export const transportData = {
  INR: [
    {
      id: "starter",
      badge: "Simple",
      title: "Starter TMS",
      subtitle: "For small transport operators or mini-fleet owners (5–20 vehicles).", // [cite: 1, 3]
      price: "₹70,000 – ₹1,00,000", // [cite: 1, 5, 6]
      hosting: "Hosting ₹800 – ₹1,500/mo", 
      timeline: "3–4 Weeks", // [cite: 1]
      highlighted: false,
      pdf: simplePDF,
      whatsappText: "Hi Kartsho, I want Starter TMS proposal.",
      roi: {
        investment: 100000,
        monthlyRevenue: 25000,
      },
      features: [
        "Basic Responsive Website", // [cite: 4]
        "Vehicle Profiles & Document Records", // [cite: 5]
        "Driver Registration with Unique ID", // [cite: 6]
        "Basic Trip Booking & Assignments", // [cite: 4]
        "Expiry Alerts (RC, Insurance, Permit)", // [cite: 5]
        "Basic Fleet Showcase", // [cite: 4]
      ],
    },
    {
      id: "growth",
      badge: "Medium",
      title: "Growth TMS",
      subtitle: "For growing transport companies needing automation (20–80 vehicles).", // [cite: 127, 128, 129]
      price: "₹1,50,000 – ₹2,50,000", // [cite: 127, 130, 131, 132]
      hosting: "Hosting ₹1,500 – ₹3,000/mo",
      timeline: "6–8 Weeks", // [cite: 127]
      highlighted: false,
      pdf: mediumPDF,
      whatsappText: "Hi Kartsho, I want Growth TMS proposal.",
      roi: {
        investment: 250000,
        monthlyRevenue: 75000,
      },
      features: [
        "Professional Website + Online Booking", // [cite: 129]
        "Enhanced Fleet Health Tracking", // [cite: 130]
        "Driver Attendance & Performance Log", // [cite: 132]
        "GPS Basic Integration", // [cite: 127]
        "Fleet Utilization Reports", // [cite: 130]
        "Salary & Advance Tracking", // [cite: 132]
      ],
    },
    {
      id: "pro",
      badge: "Advanced",
      title: "Pro TMS",
      subtitle: "For large fleet operators seeking AI & live tracking (80–300 vehicles).", // [cite: 291, 292, 293]
      price: "₹4,00,000 – ₹6,50,000", // [cite: 291, 294, 296, 297]
      hosting: "Hosting ₹4,000 – ₹10,000/mo",
      timeline: "10–12 Weeks", // [cite: 291]
      highlighted: true,
      pdf: advancedPDF,
      whatsappText: "Hi Kartsho, I want Pro TMS proposal.",
      roi: {
        investment: 650000,
        monthlyRevenue: 200000,
      },
      features: [
        "Real-Time GPS Live Tracking & Geofencing", // [cite: 291, 295]
        "AI Route Optimization & Dispatch", // [cite: 291, 296]
        "Customer & Driver Mobile Apps", // [cite: 291]
        "Automated Billing & E-way Bill Generation", // [cite: 291]
        "Predictive Maintenance Alerts", // [cite: 297]
        "Multi-Depot Fleet Management", // [cite: 297]
      ],
    },
    {
      id: "enterprise",
      badge: "Premium",
      title: "Enterprise TMS",
      subtitle: "Full digital logistics ecosystem for 300+ vehicles.", // [cite: 476, 477, 478]
      price: "₹10,00,000 – ₹20,00,000+", // [cite: 476, 479, 481, 482, 483]
      hosting: "AWS Hosting ₹15,000 – ₹60,000/mo",
      timeline: "4–6 Months", // [cite: 476]
      highlighted: false,
      pdf: premiumPDF,
      whatsappText: "Hi Kartsho, I want Enterprise TMS proposal.",
      roi: {
        investment: 2000000,
        monthlyRevenue: 600000,
      },
      features: [
        "IoT Vehicle Telematics (Fuel/Load/Speed)", // [cite: 476, 480]
        "Full Freight ERP & FASTag Integration", // [cite: 476, 482]
        "AI Demand & Capacity Forecasting", // [cite: 481]
        "Driver Behaviour Scoring", // [cite: 480]
        "Corporate & Vendor/Partner Portals", // [cite: 478]
        "Dedicated Account Manager & 24/7 Support", // [cite: 476]
      ],
    },
  ],
  USD: [
    {
      id: "starter",
      badge: "Simple",
      title: "Starter TMS",
      subtitle: "Entry-level solution for small transport business owners.", // [cite: 31]
      price: "$900 – $1,300",
      hosting: "Hosting $15 – $25/mo",
      timeline: "3–4 Weeks",
      highlighted: false,
      pdf: simplePDF,
      whatsappText: "Hi Kartsho, I want Starter TMS proposal.",
      roi: {
        investment: 1300,
        monthlyRevenue: 350,
      },
      features: [
        "Responsive Website",
        "Vehicle Document Vault",
        "Driver Registration",
        "Simple Trip Assignment",
        "Basic Fleet List",
        "Cloud Data Management",
      ],
    },
    {
      id: "growth",
      badge: "Medium",
      title: "Growth TMS",
      subtitle: "Automated fleet management with GPS visibility.", // [cite: 127]
      price: "$2,200 – $3,500",
      hosting: "$30 – $50/mo",
      timeline: "6–8 Weeks",
      highlighted: false,
      pdf: mediumPDF,
      whatsappText: "Hi Kartsho, I want Growth TMS proposal.",
      roi: {
        investment: 3500,
        monthlyRevenue: 1000,
      },
      features: [
        "Professional Portal",
        "Online Booking System",
        "Basic GPS Integration",
        "Maintenance Tracking",
        "Fleet Health Reports",
        "Staff Attendance Log",
      ],
    },
    {
      id: "pro",
      badge: "Advanced",
      title: "Pro TMS",
      subtitle: "Live fleet intelligence with AI route optimization.", // [cite: 291]
      price: "$5,000 – $8,500",
      hosting: "$60 – $150/mo",
      timeline: "10–12 Weeks",
      highlighted: true,
      pdf: advancedPDF,
      whatsappText: "Hi Kartsho, I want Pro TMS proposal.",
      roi: {
        investment: 8500,
        monthlyRevenue: 2800,
      },
      features: [
        "Live GPS Tracking Dashboard",
        "AI Route Optimization",
        "Driver & Customer Apps",
        "Automated Invoicing",
        "Advanced Analytics",
        "Predictive Maintenance",
      ],
    },
    {
      id: "enterprise",
      badge: "Premium",
      title: "Enterprise TMS",
      subtitle: "Enterprise-grade logistics platform for multi-depot operations.", // [cite: 476]
      price: "$13,000 – $25,000+",
      hosting: "AWS $200 – $800/mo",
      timeline: "4–6 Months",
      highlighted: false,
      pdf: premiumPDF,
      whatsappText: "Hi Kartsho, I want Enterprise TMS proposal.",
      roi: {
        investment: 25000,
        monthlyRevenue: 8000,
      },
      features: [
        "Advanced IoT Vehicle Telematics",
        "Enterprise Freight ERP",
        "Multi-Depot Management",
        "AI Demand Forecasting",
        "Corporate Self-Service Portal",
        "Dedicated Support Team",
      ],
    },
  ],
};
