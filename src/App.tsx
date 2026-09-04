import { Layout } from "./layout";
import { useState, useEffect } from "preact/hooks";
import { useLang } from './hooks/useLang';
import { createContext } from "preact/compat";

export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (_: "light" | "dark") => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (_: "light" | "dark") => {},
});

const getInitialTheme = (): "light" | "dark" => {
  // TODO(2026-04-09): reenable dark mode support (must add toggle)
  return "light";

  if (typeof window === "undefined") {
    return "light";
  }

  const hasLocalStorage = "localStorage" in window && window.localStorage != null;
  if (hasLocalStorage) {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  }

  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
};

const LayoutComponent = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());
  const [lang, setLang] = useLang();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (typeof window !== "undefined" && "localStorage" in window && window.localStorage != null) {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
};
export default LayoutComponent;
