import { ReactComponent } from "../assets/header.md";
import { Md } from "../components/Md";

import picture from "/picture.webp?url";
import { useTheme } from "../context/theme";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isThemeDark = theme === "dark";

  return (
    <header className="dark:bg-gray-900 flex gap-4 lg:gap-8 p-4 items-center">
      <div className="grow-0 shrink-0 relative">
        <div>
          <img
            src={picture}
            alt="Profile picture"
            width={48}
            height={48}
            className="block rounded-[50%] w-fit h-fit overflow-hidden outline-2 outline-gray-200 print:outline-gray-800 lg:w-[64px] lg:h-[64px] object-cover"
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl">
          D<span className="text-[0.9em]">ELAHODDE</span> Guillaume
        </h1>

        <Md className="text-sm italic">
          <ReactComponent />
        </Md>
      </div>

      <button
        type="button"
        aria-label={`Switch to ${isThemeDark ? "light" : "dark"} mode`}
        title={`Switch to ${isThemeDark ? "light" : "dark"} mode`}
        className="ml-auto shrink-0 inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 print:hidden"
        onClick={() => setTheme(isThemeDark ? "light" : "dark")}
      >
        {isThemeDark ? (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364 6.364-1.591-1.591M7.977 7.977 6.386 6.386m11.978 0-1.591 1.591M7.977 16.023l-1.591 1.591M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75C12.615 15.75 8.25 11.385 8.25 6a9.716 9.716 0 0 1 .75-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    </header>
  );
};
