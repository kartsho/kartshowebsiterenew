const NoiseBackground = () => {
  const noiseUrl = `${import.meta.env.BASE_URL}noise.svg`;

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
        backgroundImage: `url("${noiseUrl}")`,
      }}
    />
  );
};

export default NoiseBackground;
