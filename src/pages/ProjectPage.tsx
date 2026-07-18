import EmptyState from "../components/common/EmptyState"
import ProjectList from "../features/projects/components/ProjectList"
import { useProjectStore } from "../features/projects/store/projectStore"
import SearchProjects from "../features/projects/components/SearchProjects"
import FilterProjects from "../features/projects/components/FilterProjects"
import SortProjects from "../features/projects/components/SortProjects"

const ProjectPage = () => {
  const projects = useProjectStore((state) => state.projects)
  return (

    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <FilterProjects/>
        <SortProjects/>
        <SearchProjects/>
      </div>
      <div>
        {
          projects.length > 0 ? <ProjectList /> : <EmptyState />
        }
      </div>
    </div>
  )
}

export default ProjectPage