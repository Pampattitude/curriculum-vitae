import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { useTheme } from "../context/theme";

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="layout min-h-full flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
