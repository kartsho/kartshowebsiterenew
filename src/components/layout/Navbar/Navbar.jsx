import { Link } from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Menu,
  X,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import gsap from "gsap";

import MagneticButton from "../../common/MagneticButton";
import ThemeToggleButton from "../Footer/FooterLinks";

import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

import { navLinks } from "../../../data/navLinks.js";

const Navbar = () => {
  const noiseUrl = `${import.meta.env.BASE_URL}noise.svg`;

  /* ================= STATES ================= */

  const [isOpen, setIsOpen] =
    useState(false);

  const [active, setActive] =
    useState(window.location.pathname);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [showNavbar, setShowNavbar] =
    useState(true);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  const lastScrollY = useRef(0);

  const navRef = useRef(null);

  /* ================= SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY;

      /* NAVBAR HIDE/SHOW */

      if (
        currentScroll >
          lastScrollY.current &&
        currentScroll > 140
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current =
        currentScroll;

      /* SHRINK EFFECT */

      setIsScrolled(currentScroll > 20);

      /* PROGRESS BAR */

      const totalHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const progress =
        (currentScroll /
          totalHeight) *
        100;

      setScrollProgress(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ================= ACTIVE ROUTE FIX ================= */

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  /* ================= MOUSE GLOW ================= */

  useEffect(() => {
    const move = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  /* ================= GSAP NAV ================= */

  useEffect(() => {
    const links =
      navRef.current?.querySelectorAll(
        ".nav-link"
      );

    gsap.fromTo(
      links,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  /* ================= BODY LOCK ================= */

  useEffect(() => {
    document.body.style.overflow =
      isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= PROGRESS BAR ================= */}

      <ProgressBar
        scrollProgress={scrollProgress}
      />

      {/* ================= SPOTLIGHT ================= */}

      <div
        className="
        fixed
        inset-0
        pointer-events-none
        z-[1]
      "
      >
        <div
          className="
          absolute
          w-[350px]
          h-[350px]
          rounded-full
          bg-cyan-400/10
          blur-3xl
          transition-all
          duration-300
        "
          style={{
            left: mousePosition.x - 175,
            top: mousePosition.y - 175,
          }}
        />
      </div>

      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: showNavbar ? 0 : -120,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className={`
          fixed
          top-4
          left-1/2
          -translate-x-1/2

          z-[1000]

          transition-all
          duration-500

          ${
            isScrolled
              ? `
                w-[95%]
                max-w-7xl
              `
              : `
                w-[98%]
                max-w-[1450px]
              `
          }
        `}
      >
        {/* ================= GLASS CONTAINER ================= */}

        <div
          className="
          relative
          overflow-visible
          rounded-[30px]

          border
          border-white/40

          bg-white/70
          backdrop-blur-3xl

          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        "
        >
          {/* ================= NOISE ================= */}

          <div
            className="
            absolute
            inset-0

            opacity-[0.03]
          "
            style={{
              backgroundImage: `url("${noiseUrl}")`,
            }}
          />

          {/* ================= GLOW ================= */}

          <div
            className="
            absolute
            top-[-120px]
            left-[15%]

            w-[250px]
            h-[250px]

            rounded-full

            bg-cyan-400/20

            blur-3xl
          "
          />

          {/* ================= INNER ================= */}

          <div
            className="
            relative

            flex
            items-center
            justify-between

            px-6
            lg:px-8

            py-4
          "
          >
            {/* ================= LOGO ================= */}

            <Logo />

            {/* ================= DESKTOP NAV ================= */}

            <div
              ref={navRef}
              className="
              hidden
              lg:flex

              items-center
              gap-2
            "
            >
              {navLinks.map((item) => (
                <div
                  key={item.id}
                  className="
                  relative
                  group
                "
                >
                  <a
                    href={item.path}
                    onClick={() =>
                      setActive(item.path)
                    }
                    className="
                    nav-link

                    relative

                    flex
                    items-center
                    gap-2

                    px-5
                    py-3

                    rounded-2xl

                    font-semibold
                    text-sm

                    overflow-hidden

                    transition-all
                    duration-300
                  "
                  >
                    {/* ACTIVE PILL */}

                    {active ===
                      item.path && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 24,
                        }}
                        className="
                        absolute
                        inset-0

                        rounded-2xl

                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-500

                        shadow-[0_10px_30px_rgba(6,182,212,0.35)]

                        z-[1]
                      "
                      />
                    )}

                    {/* HOVER LIQUID */}

                    <div
                      className="
                      absolute
                      inset-0

                      rounded-2xl

                      bg-cyan-500/10

                      opacity-0

                      blur-xl

                      transition-all
                      duration-500

                      group-hover:opacity-100
                    "
                    />

                    {/* TEXT */}

                    <span
                      className={`
                      relative
                      z-[2]

                      ${
                        active ===
                        item.path
                          ? "text-white"
                          : "text-[#0B0F19]"
                      }
                    `}
                    >
                      {item.title}
                    </span>

                    {/* ICON */}

                    {item.megaMenu && (
                      <ChevronDown
                        size={16}
                        className={`
                        relative
                        z-[2]

                        ${
                          active ===
                          item.path
                            ? "text-white"
                            : "text-[#0B0F19]"
                        }
                      `}
                      />
                    )}
                  </a>

                  {/* ================= MEGA MENU ================= */}

                  {item.megaMenu && (
                    <div
                      className="
                      absolute
                      top-[120%]
                      left-0

                      opacity-0
                      invisible

                      translate-y-4

                      transition-all
                      duration-300

                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                    "
                    >
                      <div
                        className="
                        w-[280px]

                        rounded-3xl

                        border
                        border-black/5

                        bg-white/90
                        backdrop-blur-3xl

                        shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                        p-4
                      "
                      >
                      {
  item.megaMenu.map((service, index) => (
    <Link
      key={index}
      to={service.path}
      className="
      w-full
      flex
      items-center
      justify-between
      px-4
      py-4
      rounded-2xl
      text-left
      text-[#0B0F19]
      font-medium
      transition-all
      duration-300
      hover:bg-cyan-500/10
      hover:text-cyan-600
    "
    >
      {service.title}

      <Sparkles size={16} />
    </Link>
  ))
}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ================= RIGHT ================= */}

            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <div className="hidden lg:block">
                <ThemeToggleButton />
              </div>

              <div className="lg:hidden">
                <ThemeToggleButton compact />
              </div>

              {/* AI BUTTON */}

              {/* CTA */}

              <div className="hidden lg:block">
                <MagneticButton>
                  Get Started
                </MagneticButton>
              </div>

              {/* MOBILE BUTTON */}

              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  setIsOpen(!isOpen)
                }
                className="
                lg:hidden

                w-12
                h-12

                rounded-2xl

                border
                border-black/5

                bg-white

                flex
                items-center
                justify-center

                text-[#0B0F19]

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              "
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                      }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                      }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= BACKDROP ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setIsOpen(false)
            }
            className="
            fixed
            inset-0

            z-[998]

            bg-black/40
            backdrop-blur-md

            lg:hidden
          "
          />
        )}
      </AnimatePresence>

      {/* ================= MOBILE SIDEBAR ================= */}

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
              type: "spring",
              stiffness: 240,
              damping: 26,
            }}
            className="
            fixed
            top-0
            right-0

            w-[85%]
            max-w-[380px]
            h-screen

            z-[999]

            bg-white/95
            backdrop-blur-3xl

            border-l
            border-black/5

            overflow-y-auto

            lg:hidden
          "
          >
            {/* TOP */}

            <div
              className="
              flex
              items-center
              justify-between

              px-6
              py-6

              border-b
              border-black/5
            "
            >
              <Logo />

              <button
                onClick={() =>
                  setIsOpen(false)
                }
                className="
                w-11
                h-11

                rounded-xl

                bg-black/5

                flex
                items-center
                justify-center
              "
              >
                <X size={22} />
              </button>
            </div>

            {/* LINKS */}

            <div
              className="
              p-6

              flex
              flex-col

              gap-4
            "
            >
              {navLinks.map((item) => (
                <div key={item.id}>
                  <a
                    href={item.path}
                    onClick={() => {
                      setActive(item.path);

                      setIsOpen(false);
                    }}
                    className={`
                    block

                    px-5
                    py-4

                    rounded-2xl

                    font-semibold

                    transition-all
                    duration-300

                    ${
                      active ===
                      item.path
                        ? `
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500

                          text-white

                          shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                        `
                        : `
                          bg-black/[0.03]
                          text-[#0B0F19]

                          hover:bg-cyan-500/10
                        `
                    }
                  `}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
            <motion.button
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        fixed
        bottom-8
        right-8

        z-[999]

        w-16
        h-16

        rounded-full

        bg-gradient-to-r
        from-cyan-500
        to-blue-500

        text-white

        flex
        items-center
        justify-center

        shadow-[0_10px_40px_rgba(6,182,212,0.35)]

        hover:scale-110

        transition-all
        duration-300
      "
      >
        <Sparkles size={28} />
      </motion.button>
      
    </>
  );
};



export default Navbar;
