import ProjectCard from "./ProjectCard"
import { useProjectStore } from "../store/projectStore"
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router";
import EmptyState from "../../../components/common/EmptyState";

const ProjectList = () => {
    const projects = useProjectStore((state) => state.projects)
    const deleteProjectBtn = useProjectStore((state) => state.deleteProject)
    const setEditingProject = useProjectStore((state) => state.setEditingProject)
    const openModal = useProjectStore((state) => state.openModal)
    const search = useProjectStore((state) => state.search)
    const statusFilter = useProjectStore(state => state.statusFilter)
    const sortFilter = useProjectStore(state => state.sortFilter)

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
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}>
                            <ProjectCard
                                {...project}
                                className="w-[300px] min-w-[300px]"
                            >
                                <div className="flex items-center gap-2">

                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            deleteProjectBtn(project.id);
                                        }}
                                        className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-danger-soft)] hover:text-[var(--color-danger)] cursor-pointer"
                                        aria-label="حذف پروژه"
                                    >
                                        <BsFillTrash3Fill size={16} />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setEditingProject(project);
                                            openModal();
                                        }}
                                        className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)] cursor-pointer"
                                        aria-label="ویرایش پروژه"
                                    >
                                        <BsFillPencilFill size={16} />
                                    </button>

                                </div>
                            </ProjectCard>
                        </Link>
                    )
                }) : <EmptyState />
            }
        </div>
    )
}

export default ProjectList