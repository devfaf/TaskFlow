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
}

const mockProjects: Project[] = [
    {
        id: 1,
        title: 'project 1',
        description: 'this is our project',
        date: '12/03/2026',
        status: 'active'
    },
    {
        id: 2,
        title: 'project 2',
        description: 'this is our project',
        date: '10/03/2026',
        status: 'completed'
    }
]

export const useProjectStore = create<ProjectStore>()(
    persist(
        (set) => ({
            projects: mockProjects,
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
            search:"",
            setSearch: (value) =>
                set({
                    search: value,
                }),
        }),
        {
            name: "project-storage",
            partialize: (state) => ({
                projects: state.projects,
            }),
        }
    )
)