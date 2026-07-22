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

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
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