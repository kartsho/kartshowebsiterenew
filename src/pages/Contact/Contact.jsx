import ContactHero from "./sections/ContactHero";
import GlobalPresence from "./sections/GlobalPresence";
import ContactForm from "./sections/ContactForm"
import BookCall from "./sections/BookCall";
import OfficeLocation from "./sections/OfficeLocation"
import FandQ from "./sections/FandQ"
import FinalCTA from "./sections/FinalCta";
import GoogleMap from "./sections/GoogleMap";



const Contact = () => {
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