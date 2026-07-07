import ProjectCard from "./ProjectCard"
import { useProjectStore } from "../store/projectStore"

const ProjectList = () => {
    const projects = useProjectStore((state) => state.projects)

    return (
        <div>
            {
                projects && projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            className="shadow p-2 rounded-lg w-md flex justify-center items-center flex-col gap-2"
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectList