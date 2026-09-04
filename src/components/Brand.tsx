import { useContext } from "preact/hooks";
import { ThemeContext, ThemeContextType } from "../App";

export const Brand = ({
  src,
  alt,
  className,
  ...rest
}: Pick<HTMLImageElement, "src" | "alt"> & Partial<HTMLImageElement>) => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const isThemeDark = theme === "dark";

  return (
  <img
    {...(rest as React.PropsWithChildren)}
    className={["inline-block h-[1em]", isThemeDark ? 'bg-white rounded-full overflow-visible' : null, className].filter((c) => c).join(" ")}
    src={src}
    width="18px"
    height="18px"
    alt={alt}
    loading="lazy"
  />
);
};
