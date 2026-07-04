import type { ProjectProps } from "../../types/project";

export type ProjectCardProps = ProjectProps & {
    id:number;
    title: string;
    description: string;
    date: string;
    status: "active" | "completed";
    className?: string;
}

const ProjectCard = ({id, title, description, date, status, className}: ProjectCardProps) => {
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