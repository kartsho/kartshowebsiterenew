import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavItem = ({ item }) => {
  return (
    <div className="relative group">
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `
          relative
          text-sm
          uppercase
          tracking-[2px]
          transition-all
          duration-300
          ${
            isActive
              ? "text-cyan-400"
              : "text-white"
          }
        `
        }
      >
        {({ isActive }) => (
          <>
            {item.title}

            <motion.span
              initial={{ width: 0 }}
              animate={{
                width: isActive
                  ? "100%"
                  : "0%",
              }}
              whileHover={{
                width: "100%",
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                bg-cyan-400
              "
            />
          </>
        )}
      </NavLink>

      {item.megaMenu && (
        <div
          className="
          absolute
          top-10
          left-0
          w-64
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-300
          bg-[#111827]
          border
          border-white/10
          rounded-2xl
          p-6
          backdrop-blur-xl
          z-50
        "
        >
          <div className="flex flex-col gap-4">
            {item.megaMenu.map((menu, index) => (
              <span
                key={index}
                className="
                text-sm
                hover:text-cyan-400
                transition-all
                duration-300
              "
              >
                {menu}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
