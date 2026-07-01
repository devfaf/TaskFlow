import EmptyState from "../components/common/EmptyState"
import ProjectCard from "../features/projects/components/ProjectCard"

const DashboardPage = () => {
  return (
    <div>
      <div>
        <EmptyState />
        <ProjectCard className="shadow p-2 rounded-lg"
          title="پروژه اول"
          description="ساختن برنامه با ری اکت"
          date="2026/07/01"
          status="فعال"
        />
      </div>
    </div>
  )
}

export default DashboardPage