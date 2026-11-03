import { legitimates } from "../assets/content/entrepreneurship/legitimates";
import { Brand } from "../components/Brand";
import { Md } from "../components/Md";

import legitimatesLogo from "../assets/content/entrepreneurship/legitimates/logo.webp";
import { ExperienceDateRange } from "../components/ExperienceDateRange";

export const Entrepreneurship = () => (
  <div>
    <h2 className="section-title">Entrepreneurship</h2>

    <div className="px-4 py-2 print:px-0">
      <div className="flex justify-between gap-2">
        <div>
          <a
            className="inline-flex flex-nowrap gap-1 items-center"
            target="_blank"
            href="https://legitimates.fr/"
          >
            <Brand
              className="mr-1 print:hidden"
              src={legitimatesLogo}
              alt="Logo"
            />
            <span className="inline-block">{legitimates.company}</span>
          </a>
        </div>

        <ExperienceDateRange
          className="text-gray-600 dark:text-gray-400 text-sm"
          dates={legitimates.dates}
          yearOnly
        />
      </div>
      <div className="text-sm">
        <Md>{legitimates.content}</Md>
      </div>
    </div>
  </div>
);
