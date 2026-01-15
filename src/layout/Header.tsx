import { useContext } from "preact/hooks";
import { ReactComponent } from "../assets/header.md";
import { Md } from "../components/Md";
import { ThemeContext, ThemeContextType } from "../App";

import picture from "/picture.webp?url";

export const Header = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const isThemeDark = theme === "dark";

  return (
    <header className="dark:bg-gray-900 flex gap-4 lg:gap-8 p-4 items-center">
      <div className="grow-0 shrink-0 relative">
        <div>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              isThemeDark ? setTheme("light") : setTheme("dark");
            }}
            className="block rounded-[50%] w-fit h-fit overflow-hidden outline-2 outline-gray-200 print:outline-gray-800 transition-all hover:invert-100"
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
          D<span className="text-[0.9em]">ELAHODDE</span> Guillaume
        </h1>

        <Md>
          <ReactComponent />
        </Md>
      </div>
    </header>
  );
};
