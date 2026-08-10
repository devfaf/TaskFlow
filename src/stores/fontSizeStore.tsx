import { create } from "zustand"
import { persist } from "zustand/middleware"

export type FontSize = "small" | "medium" | "large"

type FontSizeStore = {
    fontSize: FontSize;
    setFontSize: (fontSize: FontSize) => void;
}

export const useFontSizeTheme = create<FontSizeStore>()(
    persist(
        (set) => ({
            fontSize: "medium",

            setFontSize: (fontSize) => set({ fontSize })
        }),
        {
            name: "fontsize-storage",
        }
    )
)
