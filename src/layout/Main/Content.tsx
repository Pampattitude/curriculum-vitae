import { Experiences } from "../../content/Experiences";

import "./Content.css";

export const Content = () => (
  <section className="content p-4 grow-1 shrink-1 print:p-0">
    <div className="max-w-4xl m-auto print:max-w-none">
      <h1 className="section-title mb-4">Professional experience</h1>

      <Experiences />
    </div>
  </section>
);
