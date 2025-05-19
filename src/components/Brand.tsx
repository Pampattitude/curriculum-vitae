export const Brand = ({
  src,
  alt,
  className,
  ...rest
}: Pick<HTMLImageElement, "src" | "alt"> & Partial<HTMLImageElement>) => (
  <img
    {...(rest as React.PropsWithChildren)}
    className={["inline-block h-[1em]", className].filter((c) => c).join(" ")}
    src={src}
    srcSet={`${src} 1w`}
    sizes="((min-width: 1em) and (max-width: 1em)) 1em"
    alt={alt}
  />
);
