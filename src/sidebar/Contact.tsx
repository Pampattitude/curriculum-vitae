import { useEffect, useState } from "preact/compat";

import { Brand } from "../components/Brand";

import linkedInLogo from "../assets/content/contact/linkedin.webp";

export const Contact = () => {
  const [displayContent, setDisplayContent] = useState<boolean>(false);

  useEffect(() => {
    setDisplayContent(true);
  }, []);

  return (
    <div className="contact">
      <div className="flex flex-col">
        <h2 className="section-title">Contact</h2>

        <div className="px-4 py-2">
          <div
            className={`flex flex-col animate-pulse ${displayContent ? "hidden" : "visible"}`}
          >
            <div className="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-42 mt-[4px]" />
            <div className="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-64 mt-[4px]" />
            <div className="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-56 mt-[4px]" />
          </div>

          <div
            className={`flex flex-col ${displayContent ? "visible" : "hidden"}`}
          >
            <div className="box-border flex flex-row gap-x-2 items-center mt-[4px]">
              <a
                className="group relative"
                href="&#109;&#97;il&#116;&#111;&#58;gu%69&#108;laum&#37;65&#46;&#100;&#101;&#108;&#97;ho&#100;d%&#54;5+job&#64;&#103;&#109;&#37;6&#49;%&#54;9l&#46;&#99;om"
                target="_blank"
              >
                gu&#105;ll&#97;&#117;me&#46;&#100;elah&#111;&#100;&#100;e&#43;job&#64;&#103;m&#97;il&#46;co&#109;
              </a>
            </div>

            <div>
              <a
                href="//linkedin.com/in/pampattitude/"
                target="_blank"
                className="flex w-fit items-center gap-x-1"
              >
                linkedin.com/in/pampattitude
                <Brand
                  className="ml-1 print:hidden"
                  src={linkedInLogo}
                  alt="Logo"
                />
              </a>
            </div>

            <div>
              <address className="mt-[4px]">Paris, FR</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
