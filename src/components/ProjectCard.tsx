import { Link } from "react-router";

type ProjectCardProps = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  technologies: string[];
  projectType: "professional" | "personal";
};

function ProjectCard({
  id,
  title,
  subtitle,
  image,
  technologies,
  projectType,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`}>
      <div className="bg-white/5 rounded-lg border border-gray-800 hover:border-teal-400 transition-all duration-300 overflow-hidden group h-full flex flex-col">
        {/* Image */}
        <div className="bg-white/5 p-6 border-b border-gray-800 group-hover:border-teal-400/50 transition">
          <img
            src={image}
            alt={`${title} architecture`}
            className="w-full h-48 object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                projectType === "professional"
                  ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                  : "bg-teal-400/10 text-teal-400 border border-teal-400/20"
              }`}
            >
              {projectType === "professional"
                ? "Professional Project"
                : "Personal Project"}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition">
            {title}
          </h3>
          {subtitle && <p className="text-gray-400 mb-4 grow">{subtitle}</p>}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-xs font-medium border border-amber-400/20"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="text-gray-500 text-xs px-3 py-1">
                +{technologies.length - 4} more
              </span>
            )}
          </div>

          {/* View Project Arrow */}
          <div className="flex items-center gap-2 text-teal-400 mt-4 group-hover:gap-3 transition-all">
            <span className="font-semibold">View Project</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
