export const Brand = ({
  src,
  alt,
  className,
  ...rest
}: Pick<HTMLImageElement, "src" | "alt"> & Partial<HTMLImageElement>) => (
  <img
    className={["inline-block h-[1em]", className].filter((c) => c).join(" ")}
    {...(rest as React.PropsWithChildren)}
    src={src}
    alt={alt}
  />
);
