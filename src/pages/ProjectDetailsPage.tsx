import { useParams } from "react-router"
import { useProjectStore } from "../features/projects/store/projectStore";
import { NavLink } from "react-router";
import { Outlet } from "react-router";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const projects = useProjectStore(state => state.projects)
    const project = projects.find((p) => p.id === Number(id))

    return (
        <div>
            <div>
                <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 flex flex-col gap-4 w-lg mx-auto my-4">
                    <div className="flex gap-2">
                        <div>
                            عنوان پروژه:
                        </div>
                        <div>
                            {project?.title}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            توضیحات
                        </div>
                        <div>
                            {project?.description}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            تاریخ
                        </div>
                        <div>
                            {project?.date}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            وضعیت
                        </div>
                        <div>
                            {project?.status}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 bg-gray-100 flex flex-col justify-center items-center">
                <nav className="flex gap-4 pb-4">
                    <div>
                        <NavLink to="overview" className={({ isActive }) =>
                            `border-b-2 ${isActive ? "border-blue-400" : "text-gray-400 border-transparent"}`
                        }>
                            Overview
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="board" className={({ isActive }) =>
                            `border-b-2 ${isActive ? "border-blue-400" : "text-gray-400 border-transparent"}`
                        }>
                            Board
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="tasks" className={({ isActive }) =>
                            `border-b-2 ${isActive ? "border-blue-400" : "text-gray-400 border-transparent"}`
                        }>
                            Tasks
                        </NavLink>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default ProjectDetailsPage