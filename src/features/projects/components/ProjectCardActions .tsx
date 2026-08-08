import { useProjectStore } from "../store/projectStore";
import type { Project } from "../../types/project";

type ProjectCardActionProps = {
    project: Project;
}

const ProjectCardActions = ({ project } : ProjectCardActionProps) => {
    const deleteProject = useProjectStore(state => state.deleteProject)
    const setEditingProject = useProjectStore(state => state.setEditingProject)
    const openModal = useProjectStore(state => state.openModal)

    const handleDeleteButton = (e : React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        deleteProject(project.id);
    }

    const handleEditButton = (e : React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingProject(project);
        openModal();
    }

    return (
        project &&
        <div className="absolute left-8 -top-1 flex flex-col text-sm w-fit items-center bg-white border rounded-lg p-2 border-[var(--color-border)]">

            <button
                onClick={handleDeleteButton}
                className="w-full rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 cursor-pointer hover:bg-gray-100 text-nowrap"
                aria-label="حذف پروژه"
            >
                حذف پروژه
            </button>

            <button
                onClick={handleEditButton}
                className="w-full rounded-lg p-2 text-[var(--color-text-secondary)] transition-all duration-200 cursor-pointer hover:bg-gray-100 text-nowrap"
                aria-label="ویرایش پروژه"
            >
                ویرایش پروژه
            </button>

        </div>
    )
}
export default ProjectCardActions 