import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout = () => (
    <div className="w-full h-full bg-gray-800 text-white">
        <Header />
        <Main />
        <Footer />
    </div>
)