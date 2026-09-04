import {  ThemeContext, useThemeState } from "./context/theme";
import { Layout } from "./layout";
import {  useEffect } from "preact/hooks";

const LayoutComponent = () => {
  const {theme, setTheme} = useThemeState();

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
