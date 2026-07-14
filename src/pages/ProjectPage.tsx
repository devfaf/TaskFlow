import EmptyState from "../components/common/EmptyState"
import ProjectList from "../features/projects/components/ProjectList"
import { useProjectStore } from "../features/projects/store/projectStore"
const ProjectPage = () => {
  const projects = useProjectStore((state) => state.projects)
  return (
    <div>
      {
        projects.length > 0 ? <ProjectList /> : <EmptyState />
      }
    </div>
  )
}

export default ProjectPage