const MatrixRain = () => {
  return (
    <div className="matrix-bg">
      {Array.from({
        length: 80,
      }).map((_, index) => (
        <span
          key={index}
          className="matrix-char"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${
              3 + Math.random() * 5
            }s`,
            animationDelay: `${
              Math.random() * 5
            }s`,
          }}
        >
          01
        </span>
      ))}
    </div>
  );
};

export default MatrixRain;