import { Fragment } from "preact";
import { Brand } from "./Brand";
import { KnownSkillName, SkillTag } from "./SkillTag";

export type ExperienceProps = {
  company: string;
  companyUrl: string;
  companyLogo: string;
  position: string | string[];
  dates: { start: Date; end?: Date };
  location: "paris" | string;
  tags: KnownSkillName[];
  hiddenTags?: KnownSkillName[]; // TMP?
} & {
  className?: string;
} & React.PropsWithChildren;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export const Experience = ({
  company,
  companyUrl,
  companyLogo,
  position,
  dates,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  location,
  tags,
  children,
  ...rest
}: ExperienceProps) => (
  <div {...rest}>
    <div className="relative flex flex-col gap-0.5 py-2 pl-4 ml-[2px] border-l-4 border-slate-800 print:py-1">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-wrap gap-x-4 text-lg">
          <div className="font-bold">
            {Array.isArray(position) ? (
              <div>
                {position.map((p, index) => (
                  <Fragment key={p}>
                    <span>{p}</span>
                    {index != position.length - 1 ? " → " : ""}
                  </Fragment>
                ))}
              </div>
            ) : (
              position
            )}
          </div>
          <div className="shrink-0">
            <div className="flex flex-nowrap gap-2 items-center">
              {companyUrl ? (
                <a
                  className="flex flex-nowrap gap-1 items-center"
                  target="_blank"
                  href={companyUrl}
                >
                  <Brand src={companyLogo} alt="Logo" />
                  <span className="inline-block">{company}</span>
                </a>
              ) : (
                <>
                  <span className="block">@</span>
                  <span className="block">{company}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="text-gray-600 text-sm">
          {dateFormatter.format(dates.start)}
          &nbsp;&mdash;&nbsp;
          {dates.end ? dateFormatter.format(dates.end) : <i>now</i>}
        </div>
      </div>
      {tags && (
        <div className="flex flex-wrap gap-x-1 gap-y-0.5 print:gap-y-0 exp-tags">
          {tags.map((tag) => (
            <Fragment key={tag.toString()}>
              <SkillTag kind="light" full abbr skill={tag} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
    <div className="pl-4 py-2 ml-[2px] text-sm border-l-1 border-slate-400 print:border-none print:pt-0">
      {children}
    </div>
  </div>
);
