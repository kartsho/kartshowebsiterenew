import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Team from "../pages/Team/Team";
import Career from "../pages/Careers/Careers";

import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import WebPricingPage from "../pages/WebDevelopment/WebPricingPage";

import GymWebsitePage from "../pages/Services/GymWebsitePage";

import Schoolwebsite from "../components/services/school/Schoolwebsite";

import Hospitalwebsite from "../components/services/hospital/Hospitalwebsite";

import RealEstatewebsite from "../components/services/realEstate/RealEstatewebsite";

import Transportwebsite from "../components/services/transport/Transportwebsite";

import Restaurantwebsite from "../components/services/restaurant/Restaurantwebsite";

/* ================= FLOATING BUTTONS ================= */

import ContactFloatingButtons from "../components/floating/ContactfloatingButton";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/team"
          element={<Team />}
        />

        <Route
          path="/career"
          element={<Career />}
        />

        {/* ================= WEB DEVELOPMENT ================= */}

        <Route
          path="/services/web-development"
          element={
            <WebDevelopment />
          }
        />

        <Route
          path="/services/web-development/pricing/:serviceKey"
          element={
            <WebPricingPage />
          }
        />

        {/* ================= GYM ================= */}

        <Route
          path="/services/gym-management-system"
          element={
            <GymWebsitePage />
          }
        />

        <Route
          path="/services/gym-website"
          element={
            <GymWebsitePage />
          }
        />

        {/* ================= SCHOOL ================= */}

        <Route
          path="/services/school-website"
          element={
            <Schoolwebsite />
          }
        />

        <Route
          path="/school-website"
          element={
            <Navigate
              to="/services/school-website"
              replace
            />
          }
        />

        {/* ================= HOSPITAL ================= */}

        <Route
          path="/services/hospital-website"
          element={
            <Hospitalwebsite />
          }
        />

        {/* ================= REAL ESTATE ================= */}

        <Route
          path="/services/real-estate-website"
          element={
            <RealEstatewebsite />
          }
        />

        <Route
          path="/services/real-state-website"
          element={
            <Navigate
              to="/services/real-estate-website"
              replace
            />
          }
        />

        <Route
          path="/services/realstate-website"
          element={
            <Navigate
              to="/services/real-estate-website"
              replace
            />
          }
        />

        {/* ================= TRANSPORT ================= */}

        <Route
          path="/services/transport-website"
          element={
            <Transportwebsite />
          }
        />

        {/* ================= RESTAURANT ================= */}

        <Route
          path="/services/restaurant-website"
          element={
            <Restaurantwebsite />
          }
        />

        <Route
          path="/services/resturent-website"
          element={
            <Navigate
              to="/services/restaurant-website"
              replace
            />
          }
        />
      </Routes>

      {/* ================= FLOATING CONTACT BUTTONS ================= */}

      <ContactFloatingButtons />
    </>
  );
};

export default AppRoutes;
