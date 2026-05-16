const NoiseBackground = () => {
  return (
    <div
      className="
      fixed
      inset-0
      opacity-[0.03]
      pointer-events-none
      z-[1]
    "
      style={{
        backgroundImage: "url('/noise.svg')",
      }}
    />
  );
};

export default NoiseBackground;
