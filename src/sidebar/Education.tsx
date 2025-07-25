import { epitech } from "../assets/content/education/epitech";
import { Brand } from "../components/Brand";
import { Md } from "../components/Md";

import epitechLogo from "../assets/content/education/epitech/logo.webp";

export const Education = () => (
  <div>
    <h2>Education</h2>

    <div className="flex justify-between gap-2">
      <div>
        <a
          className="inline-flex flex-nowrap gap-1 items-center"
          target="_blank"
          href="https://epitech.eu/"
        >
          <Brand src={epitechLogo} alt="Logo" />
          <span className="inline-block">Epitech</span>
        </a>
      </div>
      <div className="text-gray-300 text-sm">2008&nbsp;&mdash;&nbsp;2013</div>
    </div>

    <div className="text-sm">
      <Md>{epitech.content}</Md>
    </div>
  </div>
);
