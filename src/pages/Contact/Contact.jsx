import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactHero from "./sections/ContactHero";
import GlobalPresence from "./sections/GlobalPresence";
import ContactForm from "./sections/ContactForm"
import BookCall from "./sections/BookCall";
import OfficeLocation from "./sections/OfficeLocation"
import FandQ from "./sections/FandQ"
import FinalCTA from "./sections/FinalCta";
import GoogleMap from "./sections/GoogleMap";



const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scrollToHash = () => {
      if (!location.hash) {
        return;
      }

      document
        .getElementById(location.hash.replace("#", ""))
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };

    const frame = window.requestAnimationFrame(scrollToHash);

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
   <div>
    <ContactHero/>
    <GlobalPresence/>
    <ContactForm/>
    <BookCall/>
   <OfficeLocation/>
   <FandQ/>
   <FinalCTA/>
   <GoogleMap/>
   </div>
  );
};

export default Contact;
