import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-black px-6 py-24"
    >

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
