import { Brand } from "./Brand";
import { Tag } from "./Tag";
import { KnownHashes } from "./TagGauge";

export type ExperienceProps = {
  company: string;
  companyUrl: string;
  companyLogo: string;
  position: string | string[];
  dates: { start: Date; end?: Date };
  location: "paris" | string;
  tags?: Record<KnownHashes | string, string[]>;
} & {
  className?: string;
} & React.PropsWithChildren;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export const Experience = ({
  // icon,
  company,
  companyUrl,
  companyLogo,
  position,
  dates,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  location,
  tags,
  children,
  className,
  ...rest
}: ExperienceProps) => (
  <div {...rest}>
    <div className="relative flex flex-col gap-0.5 py-2 pl-4 ml-[2px] border-l-4 border-slate-800">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex gap-4 text-lg">
          <div className="font-bold">
            {Array.isArray(position)
              ? position.map((p) => <div key={p}>{p}</div>)
              : position}
          </div>
          <div className="shrink-0">
            <div className="inline-flex flex-nowrap gap-2 items-center">
              {companyUrl ? (
                <a
                  className="inline-flex flex-nowrap gap-1 items-center"
                  target="_blank"
                  href={companyUrl}
                >
                  <Brand src={companyLogo} alt={company} />
                  <span className="inline-block">{company}</span>
                </a>
              ) : (
                <>
                  <span className="inline-block">@</span>
                  <span className="inline-block">{company}</span>
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
      {/* <div>{location}</div> */}
      {tags && (
        <div className="flex flex-wrap gap-2">
          {Object.keys(tags).map((hash) =>
            tags[hash].map((tag) => (
              <Tag key={tag} hash={hash}>
                {tag}
              </Tag>
            )),
          )}
        </div>
      )}
    </div>
    <div className="px-4 py-2 ml-[2px] text-sm border-l-1 border-slate-400">
      {children}
    </div>
  </div>
);
