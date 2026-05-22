import { useState, useEffect } from "react";

import CursorGlow from "./components/common/CursorGlow";
import NoiseBackground from "./components/common/NoiseBackground";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import AppRoutes from "./routes/AppRoutes";

import { ThemeProvider } from "./context/ThemeContext";

/* ================= LOADER ================= */

import PremiumLoader from "./components/loader/premimumLoader"

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {/* ================= PREMIUM LOADER ================= */}

      {loading && <PremiumLoader />}

      {/* ================= WEBSITE ================= */}

      {!loading && (
        <>
          <CursorGlow />

          <NoiseBackground />

          <Navbar />

          <AppRoutes />

          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;