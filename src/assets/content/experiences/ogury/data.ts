import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: "Fullstack Developer",
  company: "Ogury",
  companyUrl: "https://ogury.com/",
  companyLogo: "/src/assets/images/logo-ogury.png",
  dates: {
    start: new Date("2016-03"),
    end: new Date("2017-12"),
  },
  location: "Paris, FR",
  tags: ["node", "ror", "redis", "pgsql", "aws", "travis", "docker"],
};
