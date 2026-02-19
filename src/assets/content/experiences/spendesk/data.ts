import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: "Engineering Team Lead",
  company: "Spendesk",
  companyUrl: "https://www.spendesk.com/",
  companyLogo,
  dates: {
    start: new Date("2022-11"),
    end: new Date("2025-10"),
  },
  location: "Paris, FR",
  tags: [
    "scrum",
    // "kanban",
    "smart",
    "okr",
    "notion",
    // "gSheets",
    "cultureAmp",
    "jira",
    // "looker",
    "dustAi",
    "ts",
    "react",
    // "fastify",
    "pgsql",
    // "mysql",
    "docker",
    // "terraform",
    "kube",
    "aws",
    "management",
    "leadership",
  ],
};
