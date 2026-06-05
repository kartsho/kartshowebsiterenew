import { navLinks } from "../../../data/navLinks.js";
import NavItem from "./NavItem";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
      {navLinks.map((item) => (
        <NavItem
          key={item.id}
          item={item}
        />
      ))}
    </nav>
  );
};

export default DesktopMenu;
