import markdown from "../assets/header.md";
import { Md } from "../components/Md";

import picture from '../assets/picture.jpg';

export const Header = () => (
  <header className="flex gap-4 lg:gap-8 p-4 items-center">
    <div className="grow-0 shrink-0">
      <div>
        <a
          href="/"
          className="block rounded-[50%] w-fit h-fit overflow-hidden outline-2 outline-gray-200"
        >
          <img
            src={picture}
            alt="Profile picture"
            className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] object-cover"
          />
        </a>
      </div>
    </div>

    <Md>{markdown}</Md>
  </header>
);
