export type ExperienceDateRangeProps = {
  dates: { start: Date; end?: Date };
} & {
  className?: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
});

const formatDateDiff = (start: Date, end: Date) => {
  const diff = (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24 / 365.25;

  let roundedDiff;
  if (diff - Math.abs(diff) > (2 / 12 /*2mo*/)) {
    roundedDiff = Math.abs(diff);
  } else {
    roundedDiff = Math.ceil(diff);
  }

  return roundedDiff > 1 ? `${roundedDiff} years` : `${roundedDiff} year`;
};

export const ExperienceDateRange = ({
  dates: { start, end },
  ...rest
}: ExperienceDateRangeProps) => (
  <div {...rest}>
    {dateFormatter.format(start)}&nbsp;-&nbsp;{end ? dateFormatter.format(end) : <i>now</i>}
    &nbsp;&mdash;&nbsp;
    {formatDateDiff(start, end ?? new Date())}
  </div>
);
