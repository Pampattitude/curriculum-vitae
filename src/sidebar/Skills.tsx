// import {
//   KNOWN_SKILL_KIND_PRETTY,
//   KNOWN_SKILLS_BY_KIND,
//   KnownSkillKind,
// } from "../components/KnownSkills";
import { KNOWN_SKILLS, KnownSkillKey } from "../components/KnownSkills";
import { SkillTag } from "../components/SkillTag";

export const Skills = () => (
  <div className="flex flex-col gap-1">
    <h2 className="section-title">Skills</h2>

    <section className="flex flex-wrap gap-x-2 gap-y-1 px-4 py-2 print:px-0">
      {(Object.keys(KNOWN_SKILLS) as KnownSkillKey[])
        .filter((k) => (KNOWN_SKILLS[k] as { visible?: boolean }).visible)
        .map((k) => (
          <SkillTag key={`${KNOWN_SKILLS[k]}`} skill={k} />
        ))}
    </section>

    {/* {(Object.keys(KNOWN_SKILLS_BY_KIND) as KnownSkillKind[])
      .filter((skillKind) =>
        KNOWN_SKILLS_BY_KIND[skillKind].some(
          (skill) => (skill as { visible?: boolean }).visible === true,
        ),
      )
      .map((k) => (
        <section key={k.toString()}>
          <h3>{KNOWN_SKILL_KIND_PRETTY[k]}</h3>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {KNOWN_SKILLS_BY_KIND[k]
              .filter((skill) => (skill as { visible?: boolean }).visible)
              .map((skill) => (
                <SkillTag key={`${k}-${skill.name}`} skill={skill.key} />
              ))}
          </div>
        </section>
      ))} */}
  </div>
);
