import { epitech } from "../assets/content/education/epitech";
import { Brand } from "../components/Brand";
import { ExperienceDateRange } from "../components/ExperienceDateRange";
import { Md } from "../components/Md";

export const Education = () => (
  <div>
    <h2 className="section-title">Education</h2>

    <div className="px-4 py-2 print:px-0">
      <div className="flex justify-between gap-2">
        <div>
          <a
            className="inline-flex flex-nowrap gap-1 items-center"
            target="_blank"
            href={epitech.companyUrl}
          >
            <Brand
              className="mr-1 print:hidden"
              src={epitech.companyLogo}
              alt="Logo"
            />
            <span className="inline-block">{epitech.company}</span>
          </a>
        </div>

        <ExperienceDateRange
          className="text-gray-600 dark:text-gray-400 text-sm"
          dates={epitech.dates}
          yearOnly
        />
      </div>
      <div className="text-sm">
        <Md>{epitech.content}</Md>
      </div>
    </div>
  </div>
);
