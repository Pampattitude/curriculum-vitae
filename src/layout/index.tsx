import { useContext } from "preact/hooks";
import { ThemeContext, ThemeContextType } from "../App";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout = () => {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  
  return (
    <div data-theme={theme} className="layout min-h-full flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
