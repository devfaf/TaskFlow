import type { Project } from "../../types/project";

const ProjectCard = ({id, title, description, date, status, className}: Project) => {
  return (
    <div className={className}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
        <span>{status}</span>
        <span>Project Number: {id}</span>
    </div>
  )
}

export default ProjectCard