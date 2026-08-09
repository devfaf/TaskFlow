import {create} from "zustand";

type FontFamily = "Yekan" | "Vazirmatn" | "Shabnam";

export type FontFamilyStore = {
    font: FontFamily;
    setFont: (font: FontFamily) => void;
}

export const useFontFamilyStore = create<FontFamilyStore>((set) => ({
    font: "Yekan",
    setFont: (font) => (set({font}))
}))


