import { ReactComponent } from "../assets/header.md";
import { Md } from "../components/Md";

import picture from "/picture.webp?url";

export const Header = () => (
  <header className="flex gap-4 lg:gap-8 p-4 items-center">
    <div className="grow-0 shrink-0">
      <div>
        <a
          href="/"
          className="block rounded-[50%] w-fit h-fit overflow-hidden outline-2 outline-gray-200 print:outline-gray-800"
        >
          <img
            src={picture}
            alt="Profile picture"
            width={48}
            height={48}
            className="lg:w-[64px] lg:h-[64px] object-cover"
          />
        </a>
      </div>
    </div>

    <div>
      <h1>
        D<span className="text-[0.9em]">ELAHODDE</span>{" "}
        Guillaume
      </h1>

      <Md>
        <ReactComponent />
      </Md>
    </div>
  </header>
);
