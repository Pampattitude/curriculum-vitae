import { ExperienceProps } from "../../../../components/Experience";

import companyLogo from "/images/logo-epitech.webp";

export const data: ExperienceProps = {
  position: ["Permanent Teaching Assistant", "Written Expression Assistant"],
  company: "Epitech",
  companyUrl: "https://www.epitech.eu",
  companyLogo,
  dates: {
    start: new Date("2011-05"),
    end: new Date("2013-02"),
  },
  location: "Le Kremlin-Bicêtre, FR",
  tags: ["cpp", "cSharp", "latex"],
};
