const WavePlane = () => {
  return (
    <div
      className="absolute inset-x-0 bottom-[-14%] h-[32rem] opacity-70"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(11, 14, 10, 0.15) 0%, rgba(5, 8, 5, 0.55) 50%, rgba(5, 8, 5, 0.98) 80%)",
      }}
    >
      <div
        className="absolute inset-x-[-10%] top-[18%] h-[2px] bg-gradient-to-r from-transparent via-[#dbff7a]/40 to-transparent"
        style={{ animation: "kartsho-wave 12s ease-in-out infinite" }}
      />
      <div
        className="absolute inset-x-[-15%] top-[28%] h-[1px] bg-gradient-to-r from-transparent via-[#9de7cf]/30 to-transparent"
        style={{
          animation: "kartsho-wave 16s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
};

export default WavePlane;
