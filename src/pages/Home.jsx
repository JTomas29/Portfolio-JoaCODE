import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import PortfolioSection from "../components/PortfolioSection";
import fondoVideo from "../assets/videoFondo.mp4";
import FloatingButtons from "../components/FloatingButtons.jsx";

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

      {/* CONTENIDO */}
      <div className="relative">
        <Hero />
        <PortfolioSection />
        <Services />
        <FloatingButtons/>
      </div>

    </div>
  );
}
