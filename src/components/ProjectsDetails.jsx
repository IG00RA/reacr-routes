import { useParams } from "react-router-dom";
import { projects } from "./Projects";

const ProjectsDetails = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Проект не знайдено</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectsDetails;
