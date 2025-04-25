import "./Md.css";

export type MdProps = {
  className?: string;
} & React.PropsWithChildren;

export const Md = ({ className, children, ...rest }: MdProps) => (
  <article {...rest} className={["markdown", className].filter((c) => c).join(" ")}>
    {children}
  </article>
);
