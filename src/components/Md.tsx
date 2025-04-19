import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./Md.css";
import { Car } from "./Car";

export type MdProps = {
  className?: string;
} & Parameters<typeof ReactMarkdown>[0];

export const Md = ({ className, children, ...rest }: MdProps) => (
  <div className={`markdown ${className ?? ""}`}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        blockquote(props) {
          return <Car {...props} />;
        },
      }}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  </div>
);
