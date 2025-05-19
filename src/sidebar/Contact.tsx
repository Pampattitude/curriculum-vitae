import { useEffect, useState } from "react";

import { Brand } from "../components/Brand";

import emailNormal from "/cntct/-__ -_ -- -_--.normal.webp?url";
import emailHover from "/cntct/-__ -_ -- -_--.hover.webp?url";
import emailActive from "/cntct/-__ -_ -- -_--.active.webp?url";
import address from "/cntct/nqqerff.webp?url";
import linkedInLogo from "../assets/content/contact/linkedin.webp";

export const Contact = () => {
  const [displayContent, setDisplayContent] = useState<boolean>(false);

  useEffect(() => {
    setDisplayContent(true);
  });

  return (
    <div className="contact">
      <div className="flex flex-col">
        <h2>Contact</h2>

        <div
          className={`flex flex-col animate-pulse ${displayContent ? "hidden" : "visible"}`}
        >
          <div className="h-[16px] bg-gray-200 rounded-full dark:bg-gray-700 w-42 mt-[4px]" />
          <div className="h-[16px] bg-gray-200 rounded-full dark:bg-gray-700 w-64 mt-[4px]" />
          <div className="h-[16px] bg-gray-200 rounded-full dark:bg-gray-700 w-56 mt-[4px]" />
        </div>

        <div
          className={`flex flex-col ${displayContent ? "visible" : "hidden"}`}
        >
          <address className="mt-[4px]">
            <img className="h-[16px]" src={address} alt="address" />
          </address>
          <div className="box-border flex flex-row gap-2 items-center mt-[4px]">
            <a
              id="-__.-_.--.-_--"
              className="group relative w-[251px] h-[16px]"
              href="mailto:guillaume.delahodde+spam@gmail.com"
              target="_blank"
              onClick={() => {
                const self = document.getElementById(
                  "-__.-_.--.-_--",
                ) as unknown as {
                  href: string;
                  setAttribute: (href: "href", val: string) => void;
                };
                self.setAttribute("href", self.href.replace(/\+spam/, "+job"));
              }}
            >
              <img
                className="absolute top-0 left-0 w-[251px] h-[16px] transition-opacity opacity-100 group-has-hover:opacity-0 group-has-active:opacity-0"
                src={emailNormal}
                alt="-__ -_ -- -_--"
              />
              <img
                className="absolute top-0 left-0 w-[251px] h-[16px] transition-opacity opacity-0 group-has-hover:opacity-100 group-has-active:opacity-0"
                src={emailHover}
                alt="-__ -_ -- -_--"
              />
              <img
                className="absolute top-0 left-0 w-[251px] h-[16px] transition-opacity opacity-0 group-has-hover:opacity-0 group-has-active:opacity-100"
                src={emailActive}
                alt="-__ -_ -- -_--"
              />
            </a>

            <div className="grow-0 shrink-0 self-end">
              <button
                type="button"
                className="m-auto transition-all cursor-pointer p-0.5 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 active:ring-4 active:outline-none active:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center dark:active:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  const self = document.getElementById(
                    "-__.-_.--.-_--",
                  ) as unknown as {
                    href: string;
                    setAttribute: (href: "href", val: string) => void;
                  };
                  navigator.clipboard.writeText(
                    self.href.replace(/\+spam/, "+job").replace(/^mailto:/, ""),
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <a
              href="//linkedin.com/in/pampattitude/"
              target="_blank"
              className="inline-flex items-center gap-1"
            >
              <Brand src={linkedInLogo} alt="Logo" />
              linkedin.com/in/pampattitude
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
