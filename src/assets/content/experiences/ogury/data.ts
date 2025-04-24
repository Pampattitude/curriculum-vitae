import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: "Fullstack Developer",
  company: "Ogury",
  companyUrl: "https://ogury.com/",
  companyLogo,
  dates: {
    start: new Date("2016-03"),
    end: new Date("2017-12"),
  },
  location: "Paris, FR",
  tags: ["node", "ror", "redis", "pgsql", "aws", "travis", "docker"],
};
