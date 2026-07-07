import { create } from "zustand";
import type { Project } from "../../types/project";

type ProjectStore = {
    projects: Project[];
    addProject: (project: Project) => void;
}

const mockProjects : Project[] = [
    {
        id:1,
        title:'project 1',
        description:'this is our project',
        date:'12/03/2026',
        status:'active'
    },
    {
        id:2,
        title:'project 2',
        description:'this is our project',
        date:'10/03/2026',
        status:'completed'
    }
]

export const useProjectStore = create<ProjectStore>((set) => ({
    projects: mockProjects,
    addProject: (project) => 
        set((state) => ({
            projects: [...state.projects, project]
        }))
}))