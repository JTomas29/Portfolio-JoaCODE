import Hero from "../components/Hero.jsx";
import fondoVideo from "../assets/videoFondo.mp4";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={fondoVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* HERO */}
      <Hero />
      {/* PORTFOLIO */}
      <PortfolioSection />
    </div>
  );
}
