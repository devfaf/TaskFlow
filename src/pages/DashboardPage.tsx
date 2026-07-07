import EmptyState from "../components/common/EmptyState"
import ProjectList from "../features/projects/components/ProjectList"
import { useProjectStore } from "../features/projects/store/projectStore"

const DashboardPage = () => {
  const projects = useProjectStore((state) => state.projects)

  return (
    <section>
      <div >
        { 
          projects.length > 0 ? <ProjectList/> : <EmptyState />
        }
      </div>
    </section>
  )
}

export default DashboardPage