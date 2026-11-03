import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "./logo.webp";

export const data: ExperienceProps = {
  position: "Consultant & Co-founder",
  positionType: "entrepreneurship",
  company: "Legitimates",
  companyUrl: "https://legitimates.fr/",
  companyLogo,
  dates: {
    start: new Date("2026-05"),
  },
  location: "Paris, FR",
  tags: ["entrepreneurship", "investment", "consulting", "leadership"],
};
