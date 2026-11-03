import { createElement } from "preact/compat";

import * as content from "./content";
import companyLogo from "./logo.webp";

export const epitech = {
  content: createElement(content.en),
  company: "Epitech Paris",
  companyUrl: "https://epitech.eu/",
  companyLogo,
  dates: {
    start: new Date('2008-09-01'),
    end: new Date('2013-08-30'),
  }
};
