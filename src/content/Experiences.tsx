import { spendesk } from "../assets/content/experiences/spendesk";
import { ezeeworld } from "../assets/content/experiences/ezeeworld";
import { ExperienceWrap } from "./ExperienceWrap";
import { epitechTeacher } from "../assets/content/experiences/epitechTeacher";
import { masteos } from "../assets/content/experiences/masteos";
import { earlyBirds } from "../assets/content/experiences/earlyBirds";
import { ogury } from "../assets/content/experiences/ogury";
import { accengage } from "../assets/content/experiences/accengage";
import { legitimates } from "../assets/content/experiences/legitimates";

export const Experiences = () => (
  <div className="flex flex-col m-auto max-w-6xl gap-8 print:max-w-full print:gap-2">
    <ExperienceWrap {...legitimates} />
    <ExperienceWrap {...spendesk} />
    <ExperienceWrap {...masteos} />
    <ExperienceWrap {...earlyBirds} />
    <ExperienceWrap {...ogury} />
    <ExperienceWrap {...accengage} />
    <ExperienceWrap {...ezeeworld} />
    <ExperienceWrap {...epitechTeacher} />
  </div>
);
