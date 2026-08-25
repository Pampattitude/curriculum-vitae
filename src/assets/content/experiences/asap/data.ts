import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: "Head of Engineering",
  company: "Asap TT",
  companyUrl: "https://www.asap.work/",
  companyLogo,
  dates: {
    start: new Date("2025-10"),
    end: new Date("2026-03"),
  },
  location: "Paris, FR",
  tags: [
    "scrum",
    "notion",
    "gSheets",
    "ts",
    "react",
    "pgsql",
    "docker",
    "management",
    "leadership",
    "strategy",
  ],
};
