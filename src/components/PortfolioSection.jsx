import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import portfolioVideo from "../assets/videoFondo.mp4";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      data-aos="fade-up"
      className="relative min-h-screen overflow-hidden px-6 py-24"
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={portfolioVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
