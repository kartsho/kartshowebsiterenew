import GridBackground from "./GridBackground";
import Particles from "./Particles";
import FloatingSphere from "./FloatingSphere";
import HolographicBlob from "./HolographicBlob";
import WavePlane from "./WavePlane";

const HeroScene = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050806]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(219, 255, 122, 0.12), transparent 28%), radial-gradient(circle at 80% 18%, rgba(157, 231, 207, 0.08), transparent 24%), radial-gradient(circle at 50% 80%, rgba(127, 107, 255, 0.08), transparent 28%), linear-gradient(180deg, #050806 0%, #060a06 45%, #030403 100%)",
        }}
      />
      <GridBackground />
      <HolographicBlob />
      <FloatingSphere />
      <Particles />
      <WavePlane />
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default HeroScene;
