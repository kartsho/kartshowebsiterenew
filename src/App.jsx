import CursorGlow from "./components/common/CursorGlow";
import NoiseBackground from "./components/common/NoiseBackground";
import Navbar from "./components/layout/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <CursorGlow />
      <NoiseBackground />
      <Navbar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
