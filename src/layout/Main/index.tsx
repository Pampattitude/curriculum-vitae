import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

export const Main = () => (
  <main className="w-full flex flex-col lg:flex-row dark:bg-gray-900">
    <Content />
    <Sidebar />
  </main>
);
