import ProjectCard from "./ProjectCard"
import { useProjectStore } from "../store/projectStore"
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router";

const ProjectList = () => {
    const projects = useProjectStore((state) => state.projects)
    const deleteProjectBtn = useProjectStore((state) => state.deleteProject)
    const setEditingProject = useProjectStore((state) => state.setEditingProject)
    const openModal = useProjectStore((state) => state.openModal)
    const search = useProjectStore((state) => state.search)
    const statusFilter = useProjectStore(state => state.statusFilter)
    const sortFilter = useProjectStore(state => state.sortFilter)
    const setSortFilter = useProjectStore(state => state.setSortFilter)

    const filteredProjects = projects.filter((project) => {
        const searchResult =
            project.title
                .toLowerCase()
                .includes(search.trim().toLowerCase())

        const filterResult =
            statusFilter === "all" ||
            project.status === statusFilter

        return searchResult && filterResult
    })

    const sortedProjects = [...filteredProjects].sort((projectA, projectB) => {
        const timeA = new Date(projectA.date).getTime()
        const timeB = new Date(projectB.date).getTime()
        switch (sortFilter) {
            case "newest":
                return timeB - timeA
            case "oldest":
                return timeA - timeB
            case "title":
                return projectA.title.localeCompare(projectB.title)
            default: 
                return 0
        }


    })

    return (
        <div className="flex flex-col gap-3">
            {
                sortedProjects.length > 0 ? sortedProjects.map((project) => {
                    return (
                        <Link to={`/projects/${project.id}`} key={project.id}>
                            <ProjectCard
                                
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
                        </Link>
                    )
                }) : <p>هیچ پروژه ای پیدا نشد!</p>
            }
        </div>
    )
}

export default ProjectList