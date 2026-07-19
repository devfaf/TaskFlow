import ProjectCard from "../features/projects/components/ProjectCard";
import { useProjectStore } from "../features/projects/store/projectStore"
import Button from "../components/common/Button";

const DashboardPage = () => {
  const projectsAmount = useProjectStore((state) => state.projects).length
  const threeLatestProjects = useProjectStore((state) => state.projects).slice(-3)
  console.log(threeLatestProjects);
  const openModal = useProjectStore((state) => state.openModal)


  return (
    <section>
      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center gap-4 w-full">
              <h2 className="text-2xl font-semibold">تعداد پروژه ها</h2>
              <div className="text-2xl font-semibold">
                {projectsAmount}
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center gap-4 w-full">
              <h2 className="text-2xl font-semibold">اضافه کردن پروژه</h2>
                <Button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 duration-300 rounded-lg p-2 text-white cursor-pointer">
                  اضافه کردن
                </Button>
            </div>

          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col gap-2 overflow-hidden">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-2xl font-semibold">پروژه های اخیر</h2>
              <div className="flex flex-row gap-3 overflow-x-auto w-full pb-2">
                {
                  threeLatestProjects.map((project) =>
                    <ProjectCard
                      key={project.id}
                      {...project}
                      className="shadow p-2 rounded-lg w-[300px] min-w-[300px] flex justify-center items-center flex-col gap-2 bg-blue-100 align-top whitespace-normal flex-shrink-0"
                    />
                  )
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DashboardPage