import { createElement } from "preact/compat";

import * as content from "./content";
import companyLogo from "./logo.webp";

export const legitimates = {
  content: createElement(content.en),
  company: "Legitimates",
  companyUrl: "https://legitimates.fr/",
  companyLogo,
  dates: {
    start: new Date("2024-02"),
  },
};
