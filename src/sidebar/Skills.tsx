import { TagGauge } from "../components/TagGauge";

export const Skills = () => (
  <div className="flex flex-col gap-1">
    <h2>Skills</h2>

    <section>
      <h3>Languages</h3>
      <div className="flex flex-wrap gap-2">
        <TagGauge hash="lang" factor={0.9}>
          Typescript
        </TagGauge>
        <TagGauge hash="lang" factor={0.8}>
          JavaScript
        </TagGauge>
        <TagGauge hash="lang" factor={0.6}>
          C#
        </TagGauge>
        <TagGauge hash="lang" factor={0.3}>
          Python
        </TagGauge>
      </div>
    </section>

    <section>
      <h3>Frameworks</h3>
      <div className="flex flex-wrap gap-2">
        <TagGauge hash="fram" factor={0.9}>
          React
        </TagGauge>
      </div>
    </section>

    <section>
      <h3>Databases</h3>
      <div className="flex flex-wrap gap-2">
        <TagGauge hash="db" factor={0.8}>
          PostgreSQL
        </TagGauge>
        <TagGauge hash="db" factor={0.8}>
          MongoDB
        </TagGauge>
        <TagGauge hash="db" factor={0.6}>
          MySQL
        </TagGauge>
        <TagGauge hash="db" factor={0.5}>
          BigQuery
        </TagGauge>
      </div>
    </section>

    <section>
      <h3>Tools</h3>
      <div className="flex flex-wrap gap-2">
        <TagGauge hash="misc" factor={0.7}>
          Docker
        </TagGauge>
        <TagGauge hash="misc" factor={0.5}>
          Kubernetes
        </TagGauge>
        <TagGauge hash="misc" factor={0.4}>
          Terraform
        </TagGauge>
      </div>
    </section>

    <section>
      <h3>Misc.</h3>
      <div className="flex flex-wrap gap-2">
        <TagGauge hash="misc" factor={0.9}>
          Notion
        </TagGauge>
        <TagGauge hash="misc" factor={0.8}>
          Google Sheets
        </TagGauge>
      </div>
    </section>
  </div>
);
