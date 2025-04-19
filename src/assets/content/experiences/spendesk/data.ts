import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: "Engineering Team Lead",
  company: "Spendesk",
  companyUrl: "https://www.spendesk.com/",
  companyLogo: "/src/assets/images/logo-spendesk.png",
  dates: {
    start: new Date("2022-11"),
  },
  location: "Paris, FR",
  tags: {
    lang: ["TypeScript"],
    fram: ["React", "Fastify"],
    db: ["PostgreSQL", "MySQL"],
    misc: ["Docker", "Terraform", "Kubernetes", "Notion", "Google Sheets"],
    prov: ["AWS"],
  },
};
