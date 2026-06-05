const ProgressBar = ({ scrollProgress }) => {
  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[2px] bg-cyan-400 transition-all duration-200"
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
};

export default ProgressBar;
