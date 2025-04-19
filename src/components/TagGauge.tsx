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

const COLORS: React.HTMLAttributes<HTMLSpanElement>["className"][] = [
  "bg-red-600",
  "bg-orange-600",
  "bg-yellow-600",
  "bg-lime-600",
  "bg-green-600",
  "bg-emerald-600",
  "bg-teal-600",
  "bg-cyan-600",
  "bg-sky-600",
  "bg-blue-600",
  "bg-indigo-600",
  "bg-violet-600",
  "bg-purple-600",
  "bg-fuchsia-600",
  "bg-pink-600",
  "bg-rose-600",
];

const knownHashes = {
  lang: "bg-blue-600",
  fram: "bg-orange-600",
  db: "bg-purple-600",
  prov: "bg-pink-600",
  meth: "bg-sky-600",
  tool: "bg-yellow-600",
  misc: "bg-green-600",
} as const;

export type KnownHashes = keyof typeof knownHashes;

const getColorFromString = (str: string) => {
  if (knownHashes[str as keyof typeof knownHashes]) {
    return knownHashes[str as keyof typeof knownHashes];
  }
  const hash = hashCode(str);
  return COLORS[Math.abs(hash) % COLORS.length];
};

export type TagGaugeProps = React.PropsWithChildren & {
  hash?: string;
  tooltip?: string;
  factor: number;
  className?: string;
};

export const TagGauge = ({
  hash,
  tooltip,
  factor,
  className,
  children,
  ...rest
}: TagGaugeProps) => (
  <div
    {...rest}
    className={[
      "text-xs min-w-8 inline-flex relative px-2 py-1 rounded-md overflow-hidden",
      tooltip ? "cursor-help" : "cursor-default",
      className,
    ]
      .filter((c) => c)
      .join(" ")}
    title={tooltip}
  >
    <div className="absolute top-0 left-0 w-full h-full z-0 saturate-[50%]">
      <div className="w-full h-full flex">
        <div
          style={{ flexBasis: `${Math.round(factor * 100)}%` }}
          className={[
            `h-full`,
            getColorFromString(hash ?? children?.toString() ?? ""),
          ].join(" ")}
        />

        <div
          style={{ flexBasis: `${100 - Math.round(factor * 100)}%` }}
          className="bg-gray-600 bg-blend-difference basis-full w-auto h-full"
        />
      </div>
    </div>

    <div className="z-10 w-full text-center text-white text-shadow-white">
      {children}
    </div>
  </div>
);
