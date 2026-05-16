import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../../data/navLinks.js";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          transition={{
            duration: 0.4,
          }}
          className="
          fixed
          top-0
          right-0
          w-[80%]
          h-screen
          bg-[#0B0F19]
          z-[1100]
          p-10
          flex
          flex-col
          gap-8
        "
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="
              text-2xl
              uppercase
              tracking-wider
            "
            >
              {item.title}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
