import { create } from 'zustand'

import { persist } from 'zustand/middleware';

export type AuthStore = {
    isAuthenticated: boolean,
    login: () => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            login: () =>
                set({
                    isAuthenticated: true,
                }),
            logout: () =>
                set({
                    isAuthenticated: false,
                })
        }),
            {
            name: "login-storage",
            partialize: (state) => ({
                isAuthenticated: state.isAuthenticated,
            })
        }

    )
)
