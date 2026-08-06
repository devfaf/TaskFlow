import ProjectCard from "../features/projects/components/ProjectCard";
import { useProjectStore } from "../features/projects/store/projectStore";
import Button from "../components/common/Button";
import { Link } from "react-router";
import { PiPlus } from "react-icons/pi";
import ProjectStatusCharts from "../features/projects/components/ProjectStatusCharts";
import CalendarDisplay from "../features/calendar/components/CalendarDisplay";

const DashboardPage = () => {
  const projects = useProjectStore((state) => state.projects);

  const projectsAmount = projects.length;
  const threeLatestProjects = [...projects].slice(-3).reverse();

  const openModal = useProjectStore((state) => state.openModal);

  return (
    <section className="flex flex-col space-y-4 p-6">

      <div>
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
          داشبورد
        </h1>

        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          نمای کلی پروژه‌های شما
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">

        <div
          className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-white
          p-6
        "
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            تعداد پروژه‌ها
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[var(--color-primary)]">
            {projectsAmount}
          </h2>
        </div>

        <div
          className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-white
          p-6
          flex
          flex-col
          justify-between
        "
        >
          <div>
            <p className="text-sm text-[var(--color-text-secondary)]">
              پروژه جدید
            </p>

            <h2 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
              شروع یک پروژه جدید
            </h2>
          </div>

          <div className="mt-6">
            <Button
              variant="primary"
              onClick={openModal}
              className="flex gap-2"
            >
              <PiPlus />
              اضافه کردن پروژه
            </Button>
          </div>
        </div>

      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectStatusCharts />
        <CalendarDisplay />
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-white
          p-6
        "
      >
        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              آخرین پروژه‌ها
            </h2>

            <p className="text-sm text-[var(--color-text-secondary)]">
              آخرین پروژه‌های ایجاد شده
            </p>

          </div>

          <Link
            to="/projects"
            className="
              text-sm
              text-[var(--color-primary)]
              transition-colors
              hover:underline
            "
          >
            مشاهده همه
          </Link>

        </div>

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
          "
        >
          {threeLatestProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="shrink-0"
            >
              <ProjectCard
                {...project}
                className="w-[320px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;