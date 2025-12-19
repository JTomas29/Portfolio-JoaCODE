export default function ProjectCard({ project }) {
  return (
    <div
      className=" bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition hover:scale-[1.02]"
    >
      {/* Imagen */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Contenido */}
      <div className="p-6 text-white flex flex-col">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-white/70 mb-4">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full  bg-blue-500/20  text-blue-300 ">
              {tech}
            </span>
          ))}
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-2.5
              rounded-full
              bg-blue-500/20
              text-blue-300
              font-medium
              border
              border-blue-400/30
              transition-all
              duration-300
              hover:bg-blue-500/30
              hover:text-blue-200
              hover:scale-105
            "
          >
            Ver proyecto
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
