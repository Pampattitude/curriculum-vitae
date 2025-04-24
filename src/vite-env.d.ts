/// <reference types="vite/client" />

declare module "*.md" {
  export type Markdown<Props = {}> = {
    attributes: object;
    ReactComponent: React.FunctionComponent<Props>;
  };

  export const attributes = {} as Markdown["attributes"];
  export const ReactComponent = <Props>(...args): React.ReactNode =>
    null as Markdown["ReactComponent"];
}
