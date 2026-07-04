import ProjectCard from "./ProjectCard"

const ProjectList = ({projects}) => {

    return (
        <div>
            {
                projects && projects.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            {...item}
                            className="shadow p-2 rounded-lg w-md flex justify-center items-center flex-col gap-2"
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectList