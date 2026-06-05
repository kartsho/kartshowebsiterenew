const particles = [
  { top: "12%", left: "12%", size: 7, delay: "0s" },
  { top: "18%", left: "78%", size: 5, delay: "1.2s" },
  { top: "30%", left: "58%", size: 6, delay: "0.6s" },
  { top: "44%", left: "22%", size: 4, delay: "1.8s" },
  { top: "58%", left: "82%", size: 8, delay: "0.9s" },
  { top: "68%", left: "16%", size: 5, delay: "1.5s" },
  { top: "74%", left: "49%", size: 6, delay: "0.3s" },
  { top: "82%", left: "74%", size: 4, delay: "2.1s" },
  { top: "38%", left: "36%", size: 5, delay: "2.4s" },
  { top: "86%", left: "28%", size: 7, delay: "1.1s" },
];

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={`${particle.top}-${index}`}
          className="absolute rounded-full bg-[#dbff7a]/70 shadow-[0_0_24px_rgba(219,255,122,0.6)]"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animation: "kartsho-float 12s ease-in-out infinite",
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
