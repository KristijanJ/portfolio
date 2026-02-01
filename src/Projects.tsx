import ProjectCard from "./components/ProjectCard";
import { allProjects } from "./data/projects";

function Projects() {
  return (
    <section className="min-h-screen flex justify-center py-30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            My <span className="text-teal-400">Work</span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              technologies={project.technologies}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
