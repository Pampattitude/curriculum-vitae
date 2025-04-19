import { TagGauge, TagGaugeProps } from "./TagGauge";

export const Tag = (props: Omit<TagGaugeProps, "factor">) => (
  <TagGauge factor={1} {...props} />
);
