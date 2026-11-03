export type ExperienceDateRangeProps = {
  dates: { start: Date; end?: Date };
  yearOnly?: boolean;
} & {
  className?: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  year: "numeric",
});

const dateFormatterYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
});

const formatDateDiff = (start: Date, end: Date) => {
  const diff = (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24 / 365.25;

  if (diff < 8 / 12 /*2mo*/) {
    return "less than a year";
  }

  let roundedDiff;
  if (diff - Math.abs(diff) > 2 / 12 /*2mo*/) {
    roundedDiff = Math.abs(diff);
  } else {
    roundedDiff = Math.ceil(diff);
  }

  return roundedDiff > 1 ? `${roundedDiff} years` : `${roundedDiff} year`;
};

export const ExperienceDateRange = ({
  dates: { start, end },
  yearOnly = false,
  ...rest
}: ExperienceDateRangeProps) => {
  const formatter = yearOnly ? dateFormatterYear : dateFormatter;
  return (
    <div {...rest} className={`dateline ${rest.className}`}>
      {formatter.format(start)}&nbsp;-&nbsp;
      {end ? formatter.format(end) : <i>now</i>}
      {!yearOnly ? (
        <>
          &nbsp;&mdash;&nbsp;
          {formatDateDiff(start, end ?? new Date())}
        </>
      ) : null}
    </div>
  );
};
