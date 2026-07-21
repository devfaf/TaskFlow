import { create } from "zustand";
import type { Task } from "../../types/task";
import { persist } from "zustand/middleware";

type TaskStore = {
  tasks: Task[];
  editingTask: Task | null;
  setEditingTask: (task: Task | null) => void;
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (task: Task) => void;
}

const mockTaskData: Task[] = [
  {
    id: 1,
    projectId: 1784400291949,
    title: "Design Dashboard",
    completed: "active",
  },
  {
    id: 2,
    projectId: 1784400291949,
    title: "Create Sidebar",
    completed: "active",
  },
  {
    id: 3,
    projectId: 1784402044394,
    title: "Implement Search",
    completed: "active",
  },
  {
    id: 4,
    projectId: 1784402044394,
    title: "Add Filters",
    completed: "completed",
  },
];

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: mockTaskData,
      editingTask: null,
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task]
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) =>
            task.id !== id
          )
        })),
      updateTask: (updateTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updateTask.id ? updateTask : task
          )
        })),
      setEditingTask: (task) =>
        set({
          editingTask: task
        }),
    }),
    {
      name: "task-storage",
      partialize: (state) => ({
        tasks: state.tasks,
      })
    }
  )
)