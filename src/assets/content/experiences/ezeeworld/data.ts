import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: "Fullstack Developer",
  company: "Ezeeworld",
  companyUrl: "https://www.ezeeworld.com",
  companyLogo,
  dates: {
    start: new Date("2013-12"),
    end: new Date("2015-01"),
  },
  location: "Neuilly-sur-Seine, FR",
  tags: ["node", "html", "express", "bootstrap", "mongo", "mongoose", "aws"],
};
