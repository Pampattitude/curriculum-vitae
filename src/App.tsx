import { Layout } from "./layout";
import { useState } from "preact/hooks";
import { createContext, useEffect } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (_: "light" | "dark") => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (_: "light" | "dark") => {},
});

const LayoutComponent = () => {
  const themeValue =
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  const [theme, setTheme] = useState<"light" | "dark">(themeValue);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext>
  );
};
export default LayoutComponent;
