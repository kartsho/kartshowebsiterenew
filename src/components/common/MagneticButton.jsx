import { useRef } from "react";

const MagneticButton = ({ children }) => {
  const buttonRef = useRef();

  const handleMouseMove = (e) => {
    const button = buttonRef.current;

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
    `;
  };

  const resetPosition = () => {
    buttonRef.current.style.transform =
      "translate(0px,0px)";
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className="
      px-6
      py-3
      rounded-full
      bg-cyan-400
      text-black
      font-semibold
      transition-transform
      duration-200
    "
    >
      {children}
    </button>
  );
};

export default MagneticButton;