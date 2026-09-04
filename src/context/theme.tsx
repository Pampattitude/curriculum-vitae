import {  createContext, useState } from "preact/compat";
import { useContext } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (_: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_: "light" | "dark") => {},
});

export const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") {
    return "light";
  }

  const hasLocalStorage =
    "localStorage" in window && window.localStorage != null;
  if (hasLocalStorage) {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  }

  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "light";
};

export const useThemeState = () => {
  const [theme, setTheme] =
    useState<ThemeContextType["theme"]>(getInitialTheme());
  return { theme, setTheme };
};

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);
