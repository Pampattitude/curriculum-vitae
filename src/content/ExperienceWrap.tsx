import { Experience, ExperienceProps } from "../components/Experience";
import { Md, MdProps } from "../components/Md";

export type ExperienceWrapProps = {
  data: ExperienceProps;
  content: MdProps["children"];
};

export const ExperienceWrap = ({ data, content }: ExperienceWrapProps) => (
  <Experience {...data}>
    <Md>{content}</Md>
  </Experience>
);
