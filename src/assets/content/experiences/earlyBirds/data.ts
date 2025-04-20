import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: ["Fullstack Developer", "Team Lead"],
  company: "Early Birds",
  companyUrl: "https://www.crownpeak.com/",
  companyLogo: "/src/assets/images/logo-earlybirds.png",
  dates: {
    start: new Date("2018-01"),
    end: new Date("2020-12"),
  },
  location: "Paris, FR",
  tags: [
    "confluence",
    "ts",
    "react",
    "mongo",
    "pgsql",
    "bigQuery",
    "pubSub",
    "kube",
    "gcp",
  ],
};
