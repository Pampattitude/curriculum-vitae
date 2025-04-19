import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

export const Main = () => (
  <main className="w-full flex flex-col lg:flex-row">
    <Content />
    <Sidebar />
  </main>
);
