import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: "Head of Engineering",
  company: "Masteos",
  companyUrl: "https://www.masteos.com/",
  companyLogo,
  dates: {
    start: new Date("2021-04"),
    end: new Date("2022-03"),
  },
  location: "Paris, FR",
  tags: [
    "scrum",
    "notion",
    "gSheets",
    "ts",
    "react",
    "reactNative",
    "pgsql",
    "neo4j",
    "heroku",
    "aws",
    "docker",
    "management",
    "leadership",
  ],
};
