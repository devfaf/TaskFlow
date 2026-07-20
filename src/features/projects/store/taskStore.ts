import { create } from "zustand";
import type { Task } from "../../types/task";


type TaskStore = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
}

const mockTaskData: Task[] = [
  {
    id: 1,
    projectId: 1784400291949,
    title: "Design Dashboard",
    completed: false,
  },
  {
    id: 2,
    projectId: 1784400291949,
    title: "Create Sidebar",
    completed: true,
  },
  {
    id: 3,
    projectId: 1784402044394,
    title: "Implement Search",
    completed: false,
  },
  {
    id: 4,
    projectId: 1784402044394,
    title: "Add Filters",
    completed: true,
  },
];

export const useTaskStore = create<TaskStore>()(
    (set) => ({
        tasks: mockTaskData,
        addTask: (task) =>
            set((state) => ({
                tasks: [...state.tasks, task]
            })),
        removeTask: (id) =>
            set((state) => ({
                tasks: state.tasks.filter((task) =>
                    task.id !== id
                )
            }))
    })
)