import { create } from "zustand";

type CalendarStore = {
    isModalOpen: boolean;
    openModal: (date: Date) => void;
    closeModal: () => void;
    selectedDate: Date | null;

    selectedProjectIds: number[];

    toggleProjectSelection: (id:number) => void;
    // clearSelection()
}

export const useCalendarStore = create<CalendarStore>((set) => ({
    isModalOpen: false,

    selectedDate: null,

    selectedProjectIds: [],

    openModal: (date) =>
        set({
            isModalOpen: true,
            selectedDate: date,
        }),

    closeModal: () =>
        set({
            isModalOpen: false,
            selectedDate: null,
            selectedProjectIds: [],
        }),

    toggleProjectSelection: (id) =>
        set((state) => ({
            selectedProjectIds: state.selectedProjectIds.includes(id) 
            ? state.selectedProjectIds.filter(projectId => projectId !== id) 
            : [...state.selectedProjectIds, id],
        }))


}))
