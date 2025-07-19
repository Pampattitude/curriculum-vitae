import { KNOWN_SKILLS } from "./KnownSkills";
import { KNOWN_HASHES, TagGauge, TagGaugeProps } from "./TagGauge";

export type KnownSkill = {
  name: string;
  abbr?: string;
  tooltip?: string;
  kind: KNOWN_HASHES;
  value: number;
};

export type KnownSkillName = keyof typeof KNOWN_SKILLS;

export const SkillTag = ({
  skill,
  abbr = false,
  kind = "dark",
  full = false,
}: {
  skill: KnownSkillName;
  abbr?: boolean;
  kind?: TagGaugeProps["kind"];
  full?: boolean;
}) => {
  const knownSkill: KnownSkill = KNOWN_SKILLS[skill];

  if (knownSkill === undefined) {
    return (
      <TagGauge kind={kind} hash={skill as string} factor={full ? 1 : 0}>
        {skill as string}
      </TagGauge>
    );
  }

  return (
    <TagGauge
      kind={kind}
      hash={knownSkill.kind}
      tooltip={knownSkill.tooltip}
      factor={full ? 1 : knownSkill.value}
    >
      {abbr ? (knownSkill.abbr ?? knownSkill.name) : knownSkill.name}
    </TagGauge>
  );
};
