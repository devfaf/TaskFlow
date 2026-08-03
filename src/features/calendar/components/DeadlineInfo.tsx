import type { Project } from "../../types/project";


type DeadlineInfoProps = {
  projects: Project[];
}

const DeadlineInfo = ({ projects }: DeadlineInfoProps) => {
  return (
    <div className="w-7 h-7 relative">
      <div className="absolute text-[var(--color-text-secondary)] shadow top-full right-0 hidden group-hover:block bg-[var(--color-background)] p-2 z-50 flex-col gap-2 border border-[var(--color-border)] rounded-sm w-40">
        <h3 className="text-sm border-b border-b-[var(--color-border)] pb-1 mb-2">عنوان پروژه ها</h3>
        <div className="flex flex-col items-start px-1 truncate">
          {
            projects.map(project =>
              <p key={project.id}>
                {project.title}
              </p>

            )
          }
        </div>
      </div>
    </div>
  )
}
export default DeadlineInfo