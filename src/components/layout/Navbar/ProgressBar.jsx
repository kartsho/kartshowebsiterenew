const ProgresBar=({scrollProgress})=>{
  return(
    <div className="fixed top-0 left-0 h-[2px] bg-cyan-400 z-[100]transition-all duration-200 "
    style={{
      width:`${scrollProgress}%`,
    }}
    />
  )
};
export default ProgresBar;
