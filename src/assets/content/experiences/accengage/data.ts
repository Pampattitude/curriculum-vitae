import { ExperienceProps } from "../../../../components/Experience";

export const data: ExperienceProps = {
  position: "Fullstack Developer",
  company: "Accengage",
  companyUrl: "https://www.airship.com/",
  companyLogo: "/src/assets/images/logo-accengage.png",
  dates: {
    start: new Date("2015-01"),
    end: new Date("2016-03"),
  },
  location: "Paris, FR",
  tags: {
    lang: ["Node.js"],
    fram: ["Express.js"],
    db: [
      "MySQL",
      "CouchBase",
      "Kafka",
      "MongoDB",
      "ElasticSearch",
      "Aerospike",
    ],
    prov: ["AWS", "GCP"],
  },
};
