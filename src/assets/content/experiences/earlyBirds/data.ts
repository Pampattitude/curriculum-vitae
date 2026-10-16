import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: ["Team Lead"],
  positionType: "hands-on management",
  company: "Early Birds / Attraqt",
  companyUrl: "https://www.crownpeak.com/",
  companyLogo,
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
    "management",
    "leadership",
  ],
};
