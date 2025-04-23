// Source: https://stackoverflow.com/a/7616484
const hashCode = (str: string): number => {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const STRENGTH_BG = 600 as const;
const STRENGTH_BG_LIGHT = 600 as const;
const STRENGTH_TEXT = 300 as const;
const STRENGTH_TEXT_LIGHT = 100 as const;
const STRENGTH_WHITE_TEXT = 100 as const;
const STRENGTH_WHITE_TEXT_LIGHT = 100 as const;
const STRENGTH_WHITE_BG = 600 as const;
const STRENGTH_WHITE_BG_LIGHT = 300 as const;

const COLORS: React.HTMLAttributes<HTMLSpanElement>["className"][] = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const KNOWN_HASHES = {
  lang: "blue",
  fram: "orange",
  db: "purple",
  prov: "pink",
  meth: "sky",
  tool: "yellow",
  supp: "green",
} as const;

export type KNOWN_HASHES = keyof typeof KNOWN_HASHES;

const getColorFromString = (str: string) => {
  if (KNOWN_HASHES[str as keyof typeof KNOWN_HASHES]) {
    return KNOWN_HASHES[str as keyof typeof KNOWN_HASHES];
  }
  const hash = hashCode(str);
  return COLORS[Math.abs(hash) % COLORS.length];
};

export type TagGaugeProps = React.PropsWithChildren & {
  hash?: string;
  kind?: "light" | "dark";
  tooltip?: string;
  factor: number;
  className?: string;
};

export const TagGauge = ({
  hash,
  kind = "dark",
  tooltip,
  factor,
  className,
  children,
  ...rest
}: TagGaugeProps) => {
  const light = kind === "light";
  const color = getColorFromString(hash ?? "");

  const textStrength = light ? STRENGTH_TEXT_LIGHT : STRENGTH_TEXT;
  const textColor = `text-${color}-${textStrength}`;

  const bgStrength = light ? STRENGTH_BG_LIGHT : STRENGTH_BG;
  const bgColor = `bg-${color}-${bgStrength}`;

  const whiteTextStrength = light
    ? STRENGTH_WHITE_TEXT_LIGHT
    : STRENGTH_WHITE_TEXT;
  const whiteTextColor = `text-slate-${whiteTextStrength}`;

  const whiteBgStrength = light ? STRENGTH_WHITE_BG_LIGHT : STRENGTH_WHITE_BG;
  const whiteBgColor = `bg-slate-${whiteBgStrength}`;

  return (
    <div
      {...rest}
      className={[
        "text-xs min-w-8 inline-flex relative rounded-md overflow-hidden saturate-50",
        tooltip ? "cursor-help" : "cursor-default",
        className,
      ]
        .filter((c) => c)
        .join(" ")}
      title={tooltip}
    >
      <div
        style={{ width: `calc(${Math.round(factor * 100)}%)` }}
        className={`print:hidden absolute text-nowrap top-0 left-0 ${bgColor} w-[${Math.round(factor * 100)}%] overflow-hidden ${whiteTextColor}`}
      >
        <div className=" px-2 py-0.5">{children}</div>
      </div>

      <div
        className={[
          `${textColor}`,
          ` px-2 py-0.5 text-nowrap ${whiteBgColor} overflow-hidden print:w-full print:p-0 print:bg-none`,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
