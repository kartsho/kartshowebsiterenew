import { useRef } from "react";

const MagneticButton = ({
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const buttonRef = useRef();

  const handleMouseMove = (e) => {
    const button = buttonRef.current;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetPosition = () => {
    buttonRef.current.style.transform = "translate(0px,0px)";
  };

  const baseClasses = `
    px-6
    py-3
    rounded-full
    bg-cyan-400
    text-black
    font-semibold
    transition-transform
    duration-200
  `;

  return (
    <button
      ref={buttonRef}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className={`${baseClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
