import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout = () => (
  <div className="min-h-full flex flex-col">
    <Header />
    <Main />
    <Footer />
  </div>
);
