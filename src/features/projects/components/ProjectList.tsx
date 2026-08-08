import ProjectCard from "./ProjectCard"
import { useProjectStore } from "../store/projectStore"
import { Link } from "react-router";
import EmptyState from "../../../components/common/EmptyState";
import ProjectCardActions from "./ProjectCardActions ";

const ProjectList = () => {
    const projects = useProjectStore((state) => state.projects)
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {
                sortedProjects.length > 0 ? sortedProjects.map((project) => {
                    return (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            className="w-full"
                        >
                            <ProjectCard
                                {...project}
                                className="h-full"
                            >
                                <ProjectCardActions project={project} />
                            </ProjectCard>
                        </Link>
                    )
                }) : <EmptyState />
            }
        </div>
    )
}

export default ProjectList