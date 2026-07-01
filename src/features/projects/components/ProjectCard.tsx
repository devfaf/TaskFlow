type ProjectCardProps = {
    title: string;
    description: string;
    date: string;
    status: string;
    className: string;
}

const ProjectCard = ({title, description, date, status, className}: ProjectCardProps) => {
  return (
    <div className={className}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
        <span>{status}</span>
    </div>
  )
}

export default ProjectCard