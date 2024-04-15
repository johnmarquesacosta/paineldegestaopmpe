import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarStore = {
  show: boolean;
  toggleShow: () => void;
};

export const useSidebarStore = create(
  persist<SidebarStore>(
    (set) => ({
      show: false,
      toggleShow: () =>
        set((state: SidebarStore) => {
          return { show: !state.show };
        }),
    }),
    {
      name: "sidebar-store",
    }
  )
);
