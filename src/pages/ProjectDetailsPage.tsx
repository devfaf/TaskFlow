import { NavLink, Outlet, useParams } from "react-router";
import { useProjectStore } from "../features/projects/store/projectStore";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  const projects = useProjectStore((state) => state.projects);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-[var(--color-text-secondary)]">
        پروژه پیدا نشد.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 bg-[var(--color-background)] h-screen">

      <div
        className="
        rounded-xl
        border
        border-[var(--color-border)]
        bg-white
        p-6
      "
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div className="flex-1">


            <h1 className="mb-2 text-2xl font-bold text-[var(--color-text-primary)]">
              <span>عنوان پروژه: </span>
              {project.title}
            </h1>

            <p className="leading-8 text-[var(--color-text-secondary)]">
              <span>توضیحات پروژه: </span>
              {project.description}
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <div
              className="
                rounded-lg
                bg-[var(--color-primary-soft)]
                px-4
                py-2
                text-sm
                text-[var(--color-primary)]
              "
            >
              #{project.id}
            </div>

            <div
              className="
                rounded-lg
                bg-[var(--color-hover)]
                px-4
                py-2
                text-sm
                text-[var(--color-text-primary)]
              "
            >
              {project.date}
            </div>

            <div
              className={`
                rounded-lg
                px-4
                py-2
                text-sm

                ${
                  project.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }
              `}
            >
              {project.status === "active"
                ? "فعال"
                : "تکمیل شده"}
            </div>

          </div>
        </div>
      </div>


      <div
        className="
          mt-6
          rounded-xl
          border
          border-[var(--color-border)]
          bg-white
        "
      >
        <nav
          className="
            flex
            overflow-x-auto
            border-b
            border-[var(--color-border)]
            px-2
          "
        >
          <NavLink
            to="overview"
            className={({ isActive }) =>
              `
              whitespace-nowrap
              border-b-2
              px-5
              py-4
              text-sm
              transition-all
              duration-200

              ${
                isActive
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }
            `
            }
          >
            نمای کلی
          </NavLink>

          <NavLink
            to="board"
            className={({ isActive }) =>
              `
              whitespace-nowrap
              border-b-2
              px-5
              py-4
              text-sm
              transition-all
              duration-200

              ${
                isActive
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }
            `
            }
          >
            برد
          </NavLink>

          <NavLink
            to="tasks"
            className={({ isActive }) =>
              `
              whitespace-nowrap
              border-b-2
              px-5
              py-4
              text-sm
              transition-all
              duration-200

              ${
                isActive
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }
            `
            }
          >
            تسک‌ها
          </NavLink>
        </nav>

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;