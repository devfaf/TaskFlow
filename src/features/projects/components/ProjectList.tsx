import ProjectCard from "./ProjectCard"
import { useProjectStore } from "../store/projectStore"
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

const ProjectList = () => {
    const projects = useProjectStore((state) => state.projects)
    const deleteProjectBtn = useProjectStore((state) => state.deleteProject)
    const setEditingProject = useProjectStore((state) => state.setEditingProject)
    const openModal = useProjectStore((state) => state.openModal)

    return (
        <div className="flex flex-col gap-3 p-4">
            {
                projects && projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            className="shadow p-2 rounded-lg w-md flex justify-center items-center flex-col gap-2 bg-blue-100"
                        >
                            <div className="flex gap-4">
                                <BsFillTrash3Fill
                                    onClick={() => deleteProjectBtn(project.id)} className="cursor-pointer hover:text-red-600" />
                                <BsFillPencilFill
                                    onClick={() => {
                                        setEditingProject(project)
                                        openModal()
                                    }}
                                    className="cursor-pointer hover:text-red-600" />
                            </div>
                        </ProjectCard>
                    )
                })
            }
        </div>
    )
}

export default ProjectList