import { create } from "zustand";

const initializeTheme = () => {
  const savedTheme = localStorage.getItem("chat-theme") || "coffee";
  console.log("Initializing theme:", savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);
  return savedTheme;
};

export const useThemeStore = create((set) => ({
  theme: initializeTheme(),
  setTheme: (theme) => {
    console.log("Setting theme to:", theme);
    localStorage.setItem("chat-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));