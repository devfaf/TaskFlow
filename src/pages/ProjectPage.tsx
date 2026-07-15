import EmptyState from "../components/common/EmptyState"
import ProjectList from "../features/projects/components/ProjectList"
import { useProjectStore } from "../features/projects/store/projectStore"
import SearchProjects from "../features/projects/components/SearchProjects"


const ProjectPage = () => {
  const projects = useProjectStore((state) => state.projects)
  return (

    <div className="p-4 flex flex-col gap-4">
      <SearchProjects/>
      <div>
        {
          projects.length > 0 ? <ProjectList /> : <EmptyState />
        }
      </div>
    </div>
  )
}

export default ProjectPage