import { data } from "./data";
import { ReactComponent } from "./content.md";
import { Md } from "../../../../components/Md";

export const earlyBirds = {
  data,
  content: <ReactComponent MyComponent={Md} />,
};
