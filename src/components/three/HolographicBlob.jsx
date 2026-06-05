const HolographicBlob = () => {
  return (
    <div
      className="absolute left-1/2 top-[16%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(219, 255, 122, 0.35), rgba(45, 70, 44, 0.08) 45%, transparent 72%)",
        animation: "kartsho-orbit 24s linear infinite",
      }}
    />
  );
};

export default HolographicBlob;
