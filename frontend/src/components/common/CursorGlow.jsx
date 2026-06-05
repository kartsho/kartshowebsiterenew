import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="
      fixed
      top-0
      left-0
      w-[300px]
      h-[300px]
      rounded-full
      bg-cyan-500/20
      blur-3xl
      pointer-events-none
      z-[1]
    "
    />
  );
};

export default CursorGlow;