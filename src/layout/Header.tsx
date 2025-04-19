import markdown from "../assets/header.md";
import { Md } from "../components/Md";

export const Header = () => (
  <header className="flex gap-8 p-4 items-center">
    <div>
      <div>
        <a
          href="/"
          className="block rounded-[50%] overflow-hidden outline-2 outline-gray-200"
        >
          <img
            src="/src/assets/picture.jpg"
            alt="picture.jpg"
            className="max-h-20"
          />
        </a>
      </div>
    </div>

    <Md>{markdown}</Md>
  </header>
);
