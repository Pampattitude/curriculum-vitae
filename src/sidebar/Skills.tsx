import { SkillTag } from "../components/SkillTag";

export const Skills = () => (
  <div className="print:hidden flex flex-col gap-1">
    <h2>Skills</h2>

    <section>
      <h3>Methodology</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="scrum" />
        <SkillTag skill="kanban" />
        <SkillTag skill="smart" />
        <SkillTag skill="okr" />
        <SkillTag skill="car" />
      </div>
    </section>

    <section>
      <h3>Project support</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="notion" />
        <SkillTag skill="gSheets" />
        <SkillTag skill="jira" />
        <SkillTag skill="cultureAmp" />
        <SkillTag skill="dustAi" />
      </div>
    </section>

    <section>
      <h3>Cloud providers</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="aws" />
        <SkillTag skill="gcp" />
      </div>
    </section>

    <section>
      <h3>Languages</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="ts" />
        <SkillTag skill="js" />
      </div>
    </section>

    <section>
      <h3>Frameworks</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="react" />
      </div>
    </section>

    <section>
      <h3>Databases</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="pgsql" />
        <SkillTag skill="mongo" />
        <SkillTag skill="bigQuery" />
      </div>
    </section>

    <section>
      <h3>Tools</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="docker" />
        <SkillTag skill="kube" />
        <SkillTag skill="terraform" />
      </div>
    </section>

    <section>
      <h3>Soft skills</h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <SkillTag skill="management" />
        <SkillTag skill="leadership" />
        <SkillTag skill="pedagogy" />
      </div>
    </section>
  </div>
);
