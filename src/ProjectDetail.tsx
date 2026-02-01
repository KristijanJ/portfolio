import { useParams, Navigate } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { allProjects } from "./data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-[#0e0f1c] text-white min-h-screen">
      <Header />

      <Project project={project} />

      <Footer />
    </div>
  );
}

export default ProjectDetail;
