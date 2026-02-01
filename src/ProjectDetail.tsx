import { useParams, Navigate } from "react-router";
import Project from "./components/Project";
import { allProjects } from "./data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <Project project={project} />;
}

export default ProjectDetail;
