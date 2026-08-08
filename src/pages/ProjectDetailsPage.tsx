import { NavLink, Outlet, useParams } from "react-router";
import { useProjectStore } from "../features/projects/store/projectStore";
import { useState } from "react";

const ProjectDetailsPage = () => {

  const { id } = useParams();
  const projects = useProjectStore((state) => state.projects);
  const project = projects.find((p) => p.id === Number(id));

  const [isExpanded, setIsExpanded] = useState(false)

  if (!project) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-[var(--color-text-secondary)]">
        پروژه پیدا نشد.
      </div>
    )
  }

  const readMoreButtonHandler = () => {
    setIsExpanded(true)
  }
  const readLessButtonHandler = () => {
    setIsExpanded(false)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 bg-[var(--color-background)]">

      <div
        className="
        rounded-xl
        border
        border-[var(--color-border)]
        bg-white
        p-6
      "
      >
        <div className="flex gap-2 flex-col items-start">

          <div className="flex flex-wrap gap-3">
            <div
              className="
                rounded-lg
                bg-[var(--color-hover)]
                px-4
                py-2
                text-sm
                text-[var(--color-text-primary)]
                flex
                gap-2
              "
            >
              <span>تاریخ ایجاد پروژه : </span>
              <span>{project.date}</span>
            </div>

          </div>

          <div className="flex-1">

            <h1 className="mb-2 text-2xl font-bold text-[var(--color-text-primary)] flex gap-2">
              <span className="">عنوان پروژه: </span>
              <p>{project.title}</p>

            </h1>

            <div className={`leading-8 text-[var(--color-text-secondary)] relative ${isExpanded && 'pb-10'}`}>
              <h2>توضیحات پروژه: </h2>

              <p className={`
                  ${!isExpanded ? 'line-clamp-5' : ''} 
                `}>{project.description}</p>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-gradient-to-t from-white to-transparent">
                  <button
                    onClick={readMoreButtonHandler}
                    className="text-sm text-black bg-[var(--color-background)] border border-[var(--color-border)] py-1 px-2 rounded-lg cursor-pointer">
                    بیشتر
                  </button>
                </div>
              )}

              {
                isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <button 
                    onClick={readLessButtonHandler}
                    className="text-sm text-black bg-[var(--color-background)] border border-[var(--color-border)] py-1 px-2 rounded-lg cursor-pointer">
                      بستن
                    </button>
                  </div>
                )
              }
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

              ${isActive
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

              ${isActive
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

              ${isActive
                ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }
            `
            }
          >
            تسک‌ها
          </NavLink>
        </nav>

        <Outlet />
      </div>
    </section>
  );
};

export default ProjectDetailsPage;