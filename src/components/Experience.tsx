import { Tag } from "./Tag";
import { KnownHashes } from "./TagGauge";

export type ExperienceProps = {
  // icon?: string;
  company: string;
  companyUrl?: string;
  position: string | string[];
  dates: { start: Date; end?: Date };
  location: "paris" | string;
  tags?: Record<KnownHashes | string, string[]>;
} & React.PropsWithChildren;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export const Experience = ({
  // icon,
  company,
  companyUrl,
  position,
  dates,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  location,
  tags,
  children,
  ...rest
}: ExperienceProps) => (
  <div {...rest}>
    <header className="px-4 py-2 border-l-4 border-gray-800">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex gap-2">
          <div className="font-bold">
            {Array.isArray(position)
              ? position.map((p) => <div key={p}>{p}</div>)
              : position}
          </div>
          <div className="shrink-0">
            @{" "}
            {companyUrl ? (
              <a target="_blank" href={companyUrl}>
                {company}
              </a>
            ) : (
              company
            )}
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
    </header>
    <div className="px-8 py-2 ml-[3px] border-l-1 border-gray-800">
      {children}
    </div>
  </div>
);
