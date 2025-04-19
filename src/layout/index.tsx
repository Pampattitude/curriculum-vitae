import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout = () => (
  <div className="layout min-h-full flex flex-col">
    <Header />
    <Main />
    <Footer />
  </div>
);
