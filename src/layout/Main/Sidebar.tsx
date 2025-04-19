import { Education } from "../../sidebar/Education";
import { Languages } from "../../sidebar/Languages";
import { Skills } from "../../sidebar/Skills";

export const Sidebar = () => (
  <nav className="lg:max-w-sm flex flex-col gap-2 px-4 py-2 grow-0 shrink-0">
    <Education />
    <Skills />
    <Languages />
  </nav>
);
