import markdown from "../assets/header.md";
import { Md } from "../components/Md";

import picture from '/picture.webp';

export const Header = () => (
  <header className="flex gap-8 p-4 items-center">
    <div>
      <div>
        <a
          href="/"
          className="block rounded-[50%] overflow-hidden outline-2 outline-gray-200"
        >
          <img
            src={picture}
            alt="picture"
            className="w-20 h-20"
          />
        </a>
      </div>
    </div>

    <Md>{markdown}</Md>
  </header>
);
