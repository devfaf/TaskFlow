import { create } from "zustand"

export type FontSize = "small" | "medium" | "large"

type FontSizeStore = {
    fontSize: FontSize;
    setFontSize: (fontSize: FontSize) => void;
}

export const useFontSizeTheme = create<FontSizeStore>((set) => ({
    fontSize: "medium",

    setFontSize: (fontSize) => set({ fontSize })
}))
