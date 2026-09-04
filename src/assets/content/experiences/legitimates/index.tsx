import { createElement } from "react";

import { data } from "./data";
import * as content from "./content";

export const legitimates = {
  data,
  content: createElement(content.en),
};
