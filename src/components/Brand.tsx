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
    <div 
        className={["inline-block", isThemeDark ? 'bg-white rounded-xs m-[-2px] p-[2px] overflow-visible' : null, className].filter((c) => c).join(" ")}
>
  <img
    {...(rest as React.PropsWithChildren)}
    src={src}
    width="18px"
    height="18px"
    alt={alt}
    loading="lazy"
  /></div>
);
};
