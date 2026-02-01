import { Link } from "react-router";
import { useState } from "react";
import Badge from "./Badge";
import Modal from "./Modal";

export type ProjectTextItem = {
  text: string;
  className?: string;
};

export type ProjectData = {
  id: string;
  title: string;
  subtitle?: string;
  projectType: "professional" | "personal";
  codeAvailability?: string;
  description: ProjectTextItem[][];
  image: string;
  imageAlt: string;
  technologies: string[];
  whatIBuilt: ProjectTextItem[][];
  keyFeatures?: string[];
  links?: {
    url: string;
    text: string;
  }[];
};

type ProjectProps = {
  project: ProjectData;
};

function Project({ project }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center md:py-30 py-25">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <h1 className="text-2xl md:text-4xl font-bold">{project.title}</h1>
          {project.subtitle && (
            <p className="text-teal-400 text-xl">{project.subtitle}</p>
          )}
          <div className="flex items-center gap-4 mb-4">
            <Badge
              size="sm"
              variant={
                project.projectType === "professional" ? "amber" : "teal"
              }
            >
              {project.projectType === "professional"
                ? "Professional Project"
                : "Personal Project"}
            </Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Diagram */}
          <div className="bg-white/5 rounded-lg p-8 border border-gray-800 hover:border-teal-400/50 transition">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-auto cursor-pointer hover:opacity-80 transition"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* Right: Description & Tech */}
          <div className="space-y-8">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                About the Project
              </h2>
              <div className="space-y-3">
                {project.description.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-400 leading-relaxed">
                    {paragraph.map((item, itemIdx) => (
                      <span key={itemIdx} className={item.className}>
                        {item.text}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} size="sm" variant="amber">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links or Code Availability Message */}
            <div className="space-y-4">
              <div className="flex gap-2">
                {project.links &&
                  project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.url.toLowerCase().includes("github") ? "bg-teal-400 hover:bg-teal-300" : "bg-amber-400 hover:bg-amber-300"} text-black text-sm px-3 py-2 rounded-full font-semibold transition flex items-center gap-2`}
                    >
                      {link.url.toLowerCase().includes("github") && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {link.text.toLowerCase().includes("demo") && (
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                      {link.text}
                    </a>
                  ))}
              </div>
              {project.codeAvailability && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.codeAvailability}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What I Built Section */}
        <div className="space-y-8 bg-white/5 rounded-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold text-white">What I Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.whatIBuilt.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-teal-400 text-xl mt-1">▹</span>
                <p className="text-gray-400 leading-relaxed">
                  {item.map((textItem, textIdx) => (
                    <span key={textIdx} className={textItem.className}>
                      {textItem.text}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-bold text-white">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="bg-white/5 border border-gray-800 rounded-lg p-4 hover:border-amber-400/50 transition"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img
            src={project.image}
            alt={project.imageAlt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </Modal>
      </div>
    </section>
  );
}

export default Project;
