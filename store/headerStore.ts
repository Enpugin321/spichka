import { create } from "zustand";

interface HeaderState {
  title: string;
  showBack: boolean;
  showAvatar?: boolean;
  showProfileBar?: boolean;
  setHeader: (
    title: string,
    showBack: boolean,
    showAvatar: boolean,
    showProfileBar: boolean
  ) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  title: "Home",
  showBack: false,
  showAvatar: true,
  showProfileBar: false,
  setHeader: (title, showBack, showAvatar, showProfileBar) =>
    set({ title, showBack, showAvatar, showProfileBar }),
}));
