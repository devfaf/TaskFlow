import { create } from "zustand";
import type { Project } from "../../types/project";
import { persist } from "zustand/middleware";

type ProjectStore = {
    projects: Project[];
    editingProject: Project | null;
    setEditingProject: (project: Project | null) => void;
    addProject: (project: Project) => void;
    deleteProject: (id: number) => void;
    updateProject: (project: Project) => void;

    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;

    search: string;
    setSearch: (value: string) => void;

    statusFilter: string;
    setStatusFilter: (value: string) => void;
    clearStatusFilter: () => void;

    sortFilter: string;
    setSortFilter: (value: string) => void;
    clearSortFilter: () => void;
}

export const useProjectStore = create<ProjectStore>()(
    persist(
        (set) => ({
            projects: [],
            isModalOpen: false,
            editingProject: null,
            addProject: (project) =>
                set((state) => ({
                    projects: [...state.projects, project]
                })),
            deleteProject: (id) =>
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id)
                })),
            updateProject: (updateProject) =>
                set((state) => ({
                    projects: state.projects.map((project) =>
                        project.id === updateProject.id ? updateProject : project
                    )
                })),
            openModal: () =>
                set({
                    isModalOpen: true,
                }),
            closeModal: () =>
                set({
                    isModalOpen: false,
                }),
            setEditingProject: (project) =>
                set({
                    editingProject: project,
                }),
            search: "",
            setSearch: (value) =>
                set({
                    search: value,
                }),
            statusFilter: "all",
            setStatusFilter: (value) =>
                set({
                    statusFilter: value,
                }),
            clearStatusFilter: () =>
                set({
                    statusFilter: "all",
                }),
            sortFilter: "",
            setSortFilter(value) {
                set({
                    sortFilter: value,
                })
            },
            clearSortFilter(){
                set({
                    sortFilter: "",
                })
            }
        }),
        {
            name: "project-storage",
            partialize: (state) => ({
                projects: state.projects,
            }),
        }
    )
)