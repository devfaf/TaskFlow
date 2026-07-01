import EmptyState from "../components/common/EmptyState"
import ProjectList from "../features/projects/components/ProjectList"

const DashboardPage = () => {
  return (
    <div>
      <div >

        <EmptyState />
        <ProjectList />
      </div>
    </div>
  )
}

export default DashboardPage