import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Team from "../pages/Team/Team";
import Career from "../pages/Careers/Careers";
import AboutCompany from "../pages/Legal/AboutCompany";
import PrivacyPolicy from "../pages/Legal/PrivacyPolicy";
import TermsConditions from "../pages/Legal/TermsConditions";
import RefundPolicy from "../pages/Legal/RefundPolicy";

import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import WebPricingPage from "../pages/WebDevelopment/WebPricingPage";

import GymWebsitePage from "../pages/Services/GymWebsitePage";

import Schoolwebsite from "../components/services/school/Schoolwebsite";
import Hospitalwebsite from "../components/services/hospital/Hospitalwebsite";
import RealEstatewebsite from "../components/services/realEstate/RealEstatewebsite";
import Transportwebsite from "../components/services/transport/Transportwebsite";
import Restaurantwebsite from "../components/services/restaurant/Restaurantwebsite";
import Events from "../pages/Events/Event";




/* ================= FLOATING BUTTONS ================= */

import ContactFloatingButtons from "../components/floating/ContactfloatingButton";
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

       

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/team" element={<Team />} />

        <Route path="/career" element={<Career />} />

        {/* ================= LEGAL ================= */}

        <Route path="/about-company" element={<AboutCompany />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms-and-conditions" element={<TermsConditions />} />

        <Route path="/refund-policy" element={<RefundPolicy />} />

        <Route
          path="/legal/about-company"
          element={<Navigate to="/about-company" replace />}
        />

        <Route
          path="/legal/privacy-policy"
          element={<Navigate to="/privacy-policy" replace />}
        />

        <Route
          path="/legal/terms-and-conditions"
          element={<Navigate to="/terms-and-conditions" replace />}
        />

        <Route
          path="/legal/refund-policy"
          element={<Navigate to="/refund-policy" replace />}
        />

        {/* ================= WEB DEVELOPMENT ================= */}

        <Route path="/services/web-development" element={<WebDevelopment />} />

        <Route
          path="/services/web-development/pricing/:serviceKey"
          element={<WebPricingPage />}
        />

        {/* ================= GYM ================= */}

        <Route
          path="/services/gym-management-system"
          element={<GymWebsitePage />}
        />

        <Route path="/services/gym-website" element={<GymWebsitePage />} />

        {/* ================= SCHOOL ================= */}

        <Route
          path="/services/school-website"
          element={<Schoolwebsite />}
        />

        <Route
          path="/school-website"
          element={<Navigate to="/services/school-website" replace />}
        />

        {/* ================= HOSPITAL ================= */}

        <Route
          path="/services/hospital-website"
          element={<Hospitalwebsite />}
        />

        {/* ================= REAL ESTATE ================= */}

        <Route
          path="/services/real-estate-website"
          element={<RealEstatewebsite />}
        />

        <Route
          path="/services/real-state-website"
          element={<Navigate to="/services/real-estate-website" replace />}
        />

        <Route
          path="/services/realstate-website"
          element={<Navigate to="/services/real-estate-website" replace />}
        />

        {/* ================= TRANSPORT ================= */}

        <Route
          path="/services/transport-website"
          element={<Transportwebsite />}
        />

        {/* ================= RESTAURANT ================= */}

        <Route
          path="/services/restaurant-website"
          element={<Restaurantwebsite />}
        />

        <Route
          path="/services/resturent-website"
          element={<Navigate to="/services/restaurant-website" replace />}
        />
         <Route
          path="/events"
          element={<Events/>}
        />
      </Routes>

      {/* ================= FLOATING CONTACT BUTTONS ================= */}

      <ContactFloatingButtons />
    </>
  );
};

export default AppRoutes;
