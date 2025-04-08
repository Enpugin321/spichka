import { create } from "zustand";

interface HeaderState {
  visible: boolean;
  title: string;
  showBack: boolean;
  showAvatar: boolean;
  showProfileBar: boolean;
  transparent: boolean;
  absolute: boolean;
  setHeader: (config: Partial<HeaderState>) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  visible: true,
  title: "",
  showBack: false,
  showAvatar: true,
  showProfileBar: false,
  transparent: false,
  absolute: false,
  setHeader: (config) => set((state) => ({ ...state, ...config })),
}));
