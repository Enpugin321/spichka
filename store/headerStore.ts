import { create } from "zustand";

interface HeaderState {
  visible: boolean;
  showBack: boolean;
  showAvatar: boolean;
  showProfileBar: boolean;
  transparent: boolean;
  absolute: boolean;
  setHeader: (config: Partial<HeaderState>) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  visible: true,
  showBack: false,
  showAvatar: true,
  showProfileBar: false,
  transparent: false,
  absolute: false,
  setHeader: (config) => set((state) => ({ ...state, ...config })),
}));
