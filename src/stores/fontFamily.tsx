import { create } from "zustand";
import { persist } from "zustand/middleware"

type FontFamily = "Yekan" | "Vazirmatn" | "Shabnam";

export type FontFamilyStore = {
    font: FontFamily;
    setFont: (font: FontFamily) => void;
}

export const useFontFamilyStore = create<FontFamilyStore>()(
    persist(
        (set) => ({
            font: "Yekan",
            setFont: (font) => (set({ font }))
        }),
        {
            name: "fontfamily-storage",
        }
    )
)


