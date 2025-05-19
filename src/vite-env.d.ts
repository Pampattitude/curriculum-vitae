/// <reference types="vite/client" />

declare module 'rollup-plugin-css-porter';

declare module "*.md" {
  export type Markdown<Props = object> = {
    attributes: object;
    ReactComponent: React.FunctionComponent<Props>;
  };

  export const attributes = {} as Markdown["attributes"];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export const ReactComponent = <Props>(...args: Props): React.ReactNode =>
    null as Markdown["ReactComponent"];
}
