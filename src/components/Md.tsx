import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import "./Md.css";

export type MdProps = {
  className?: string;
} & Parameters<typeof ReactMarkdown>[0];

export const Md = ({ className, children, ...rest }: MdProps) => (
  <div className={`markdown ${className ?? ""}`}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={
        {
          header: (props: React.PropsWithChildren) => (
            <footer className="text-[1.2em] italic mb-2" {...props} />
          ),
          footer: (props: React.PropsWithChildren) => (
            <footer className="text-[1.2em] italic mt-2" {...props} />
          ),
          car: (props: React.PropsWithChildren) => <ul {...props} />,
          cha: ({ children, ...props }: React.PropsWithChildren) => (
            <li className="list-none" {...props}>
              <em>
                <strong>Challenge</strong>
              </em>
              : {children}
            </li>
          ),
          act: ({ children, ...props }: React.PropsWithChildren) => (
            <li className="list-none" {...props}>
              <em>
                <strong>Actions</strong>
              </em>
              : {children}
            </li>
          ),
          res: ({ children, ...props }: React.PropsWithChildren) => (
            <li className="list-none" {...props}>
              <em>
                <strong>Results</strong>
              </em>
              : {children}
            </li>
          ),
        } as unknown as Parameters<typeof ReactMarkdown>[0]["components"]
      }
      {...rest}
    >
      {children}
    </ReactMarkdown>
  </div>
);
