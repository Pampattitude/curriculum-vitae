import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: ["Permanent Teaching Assistant", "Written Expression Assistant"],
  company: "Epitech",
  companyUrl: "https://www.epitech.eu",
  companyLogo: "/src/assets/images/logo-epitech.png",
  dates: {
    start: new Date("2011-05"),
    end: new Date("2013-02"),
  },
  location: "Le Kremlin-Bicêtre, FR",
  tags: { lang: ["C++", "C#", "LaTeX"] },
};
