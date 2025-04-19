import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: "Head of Engineering",
  company: "Masteos",
  companyUrl: "https://www.masteos.com/",
  companyLogo: "/src/assets/images/logo-masteos.jpg",
  dates: {
    start: new Date("2021-04"),
    end: new Date("2022-03"),
  },
  location: "Paris, FR",
  tags: {
    lang: ["TypeScript"],
    fram: ["React", "React Native"],
    db: ["PostgreSQL", "Neo4J"],
    misc: ["Docker", "Notion", "Google Sheets"],
    prov: ["Heroku", "AWS"],
  },
};
