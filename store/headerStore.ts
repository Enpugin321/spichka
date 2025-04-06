import { create } from "zustand";

interface HeaderState {
  title: string;
  showBack: boolean;
  setHeader: (title: string, showBack: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  title: "Home",
  showBack: false,
  setHeader: (title, showBack) => set({ title, showBack }),
}));
