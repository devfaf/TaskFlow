import EmptyState from "../components/common/EmptyState"
import ProjectList from "../features/projects/components/ProjectList"
import type { ProjectProps } from "../features/types/project"
import FilterDropdown from "../features/projects/components/FilterDropdown"

const DashboardPage = () => {

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: 'project 1',
      description: 'this is a project about React js',
      date: '12/04/2026',
      status: 'active',
    },
    {
      id: 2,
      title: 'project 2',
      description: 'this is a project about React js',
      date: '08/04/2026',
      status: 'completed',
    },
    {
      id: 3,
      title: 'project 3',
      description: 'this is a project about React js',
      date: '06/04/2026',
      status: 'active',
    }
  ]

  return (
    <section>
      <div>
        <FilterDropdown/>
      </div>
      <div >
        { 
          projects ? <ProjectList projects={projects} /> : <EmptyState />
        }
      </div>
    </section>
  )
}

export default DashboardPage