import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: "Fullstack Developer",
  company: "Ogury",
  companyUrl: "https://ogury.com/",
  dates: {
    start: new Date("2016-03"),
    end: new Date("2017-12"),
  },
  location: "Paris, FR",
  tags: {
    lang: ["Node.js"],
    fram: ["Ruby on Rails"],
    db: ["Redis", "PostgreSQL"],
    prov: ["AWS"],
    misc: ["Travis", "Docker"],
  },
};
