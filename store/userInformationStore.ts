import { create } from "zustand";

interface UserState {
  id: number;
  name: string;
  setUserInformation: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  id: 0,
  name: "Admin",
  setUserInformation: (id) => set({ id }),
}));
