import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useLocaleStore = create(persist((set, get: any) => ({
    locale: "en",
    getLocale: () => get().locale,
    setLocale: (locale: string) => {
        set({ locale })
    }
}), { name: "translation" }))

export const useLocale = () => useLocaleStore((state: any) => state)