import { ReactComponent } from "../assets/header.md";
import { Md } from "../components/Md";

import picture from '../assets/picture.jpg';

export const Header = () => (
  <header className="flex gap-8 p-4 items-center">
    <div>
      <div>
        <a
          href="/"
          className="block rounded-[50%] w-20 h-20 overflow-hidden outline-2 outline-gray-200"
        >
          <img
            src={picture}
            alt="picture"
            className="h-fit object-cover"
          />
        </a>
      </div>
    </div>

    <ReactComponent MyComponent={Md} />
  </header>
);
