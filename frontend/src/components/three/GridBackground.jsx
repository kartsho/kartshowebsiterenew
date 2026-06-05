const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 opacity-35"
      style={{
        backgroundImage:
          "linear-gradient(rgba(180, 210, 140, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(180, 210, 140, 0.08) 1px, transparent 1px)",
        backgroundSize: "96px 96px",
        maskImage:
          "radial-gradient(circle at center, black 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 35%, transparent 100%)",
        animation: "kartsho-grid-drift 28s linear infinite",
      }}
    />
  );
};

export default GridBackground;
