export const KNOWN_SKILLS = {
  agile: { name: "Agile", kind: "meth", value: 0.9, visible: true },
  lean: { name: "Lean", kind: "meth", value: 0.7, visible: true },
  scrum: { name: "Scrum", kind: "meth", value: 0.9 },
  kanban: { name: "Kanban", kind: "meth", value: 0.8 },
  smart: {
    name: "SMART",
    tooltip: "Specific, Measurable, Achievable, Relevant, Time-bound",
    kind: "meth",
    value: 0.6,
  },
  okr: {
    name: "OKR",
    tooltip: "Objective Key Results",
    kind: "meth",
    value: 1,
    visible: true,
  },
  kpi: {
    name: "KPI",
    tooltip: "Key Performance Indicators",
    kind: "meth",
    value: 0.9,
    visible: true,
  },
  star: {
    name: "STAR",
    tooltip: "Situation, Task, Action, Results",
    kind: "meth",
    value: 0.8,
    visible: true,
  },
  car: {
    name: "CAR",
    tooltip: "Challenge, Actions, Results",
    kind: "meth",
    value: 1,
  },

  notion: { name: "Notion", kind: "supp", value: 0.9, visible: true },
  gSheets: { name: "GSheets", kind: "supp", value: 0.8 },
  jira: { name: "Jira", kind: "supp", value: 0.8 },
  confluence: { name: "Confluence", kind: "supp", value: 0.8 },
  cultureAmp: { name: "CultureAmp", kind: "supp", value: 0.7, visible: true },
  looker: { name: "Looker", kind: "supp", value: 0.5 },
  dustAi: { name: "Dust.tt", kind: "supp", value: 0.6 },

  aws: { name: "AWS", kind: "prov", value: 0.7, visible: true },
  gcp: { name: "GCP", kind: "prov", value: 0.8, visible: true },
  heroku: { name: "Heroku", kind: "prov", value: 0.6 },

  ts: {
    name: "TypeScript",
    abbr: "TS",
    kind: "lang",
    value: 0.9,
    visible: true,
  },
  js: { name: "JavaScript", abbr: "JS", kind: "lang", value: 0.8, visible: true },
  html: { name: "HTML", kind: "lang", value: 0.9 },
  cpp: { name: "C++", kind: "lang", value: 0.8 },
  cSharp: { name: "C#", kind: "lang", value: 0.7 },
  python: { name: "Python", kind: "lang", value: 0.5, visible: true },
  gdscript: { name: "GDScript", kind: "lang", value: 0.6 },
  latex: { name: "Latex", kind: "lang", value: 0.3 },

  node: {
    name: "Node.js",
    abbr: "Node",
    kind: "fram",
    value: 0.9,
    visible: true,
  },
  react: { name: "React", kind: "fram", value: 0.9, visible: true },
  reactNative: {
    name: "React Native",
    kind: "fram",
    value: 0.3,
    visible: true,
  },
  express: { name: "Express", kind: "fram", value: 0.9 },
  fastify: { name: "Fastify", kind: "fram", value: 0.7 },
  ror: { name: "Ruby on Rails", abbr: "RoR", kind: "fram", value: 0.3 },
  mongoose: { name: "Mongoose", kind: "fram", value: 0.8 },
  bootstrap: { name: "Bootstrap", kind: "fram", value: 0.7 },

  pgsql: {
    name: "PostgreSQL",
    abbr: "PGSQL",
    kind: "db",
    value: 0.8,
    visible: true,
  },
  mysql: { name: "MySQL", kind: "db", value: 0.7 },
  redis: { name: "Redis", kind: "db", value: 0.9 },
  mongo: { name: "MongoDB", kind: "db", value: 0.8, visible: true },
  bigQuery: { name: "BigQuery", kind: "db", value: 0.5 },
  neo4j: { name: "Neo4J", kind: "db", value: 0.4 },
  couchBase: { name: "CouchBase", kind: "db", value: 0.4 },
  elasticSearch: { name: "ElasticSearch", kind: "db", value: 0.6 },
  aerospike: { name: "Aerospike", kind: "db", value: 0.4 },

  docker: { name: "Docker", kind: "tool", value: 0.8, visible: true },
  kube: {
    name: "Kubernetes",
    abbr: "K8S",
    kind: "tool",
    value: 0.6,
    visible: true,
  },
  terraform: { name: "Terraform", kind: "tool", value: 0.4 },
  kafka: { name: "Kafka", kind: "tool", value: 0.7, visible: true },
  pubSub: { name: "Pub/Sub", kind: "tool", value: 0.7 },
  travis: { name: "Travis", kind: "tool", value: 0.8 },

  entrepreneurship: {
    name: "Entrepreneurship",
    abbr: "Entrepreneur",
    kind: "soft",
    value: 0.6,
  },
  investment: { name: "Investment", kind: "soft", value: 0.7 },
  consulting: { name: "Consulting", kind: "soft", value: 0.8 },
  management: {
    name: "Management",
    abbr: "Mgmt",
    kind: "soft",
    value: 0.9,
    visible: true,
  },
  "hands-on management": {
    name: "Management (hands-on)",
    abbr: "Mgmt hands-on",
    kind: "soft",
    value: 1,
    visible: false,
  },
  career: {
    name: "Career progress",
    abbr: "Career",
    kind: "soft",
    value: 0.9,
    visible: true,
  },
  careerLadder: {
    name: "Career ladder",
    abbr: "Career ladder",
    kind: "soft",
    value: 0.6,
  },
  goals: {
    name: "Individual goals",
    abbr: "Goals",
    kind: "soft",
    value: 0.8,
    visible: true,
  },
  leadership: {
    name: "Leadership",
    abbr: "Lead",
    kind: "soft",
    value: 0.9,
    visible: true,
  },
  strategy: {
    name: "Strategy",
    abbr: "Strat",
    kind: "soft",
    value: 0.7,
    visible: true,
  },
  roadmap: {
    name: "Roadmapping",
    abbr: "Roadmap",
    kind: "soft",
    value: 0.9,
    visible: true,
  },
  budget: {
    name: "Budgetting",
    abbr: "Budget",
    kind: "soft",
    value: 0.8,
    visible: true,
  },
  mentor: {
    name: "Mentoring",
    abbr: "Mentor",
    kind: "soft",
    value: 0.9,
    visible: true,
  },
  pedagogy: { name: "Pedagogy", kind: "soft", value: 0.9 },
  development: {
    name: "Development",
    abbr: "Dev",
    kind: "soft",
    value: 0.9,
    visible: false,
  },
} as const;

export type KnownSkills = typeof KNOWN_SKILLS;
export type KnownSkillKey = keyof KnownSkills;
export type KnownSkill = KnownSkills[KnownSkillKey];

export type KnownSkillKind = KnownSkill["kind"];
export type KnownSkillByKind = Record<
  KnownSkillKind,
  (KnownSkill & { key: KnownSkillKey })[]
>;
export const KNOWN_SKILLS_BY_KIND: KnownSkillByKind = (
  Object.keys(KNOWN_SKILLS) as KnownSkillKey[]
).reduce((acc: KnownSkillByKind, k) => {
  const kind: keyof KnownSkillByKind = KNOWN_SKILLS[k].kind;
  acc[kind] = acc[kind]
    ? [...acc[kind], { ...KNOWN_SKILLS[k], key: k }]
    : [{ ...KNOWN_SKILLS[k], key: k }];
  return acc;
}, {} as KnownSkillByKind);

export const KNOWN_SKILL_KIND_PRETTY: Record<KnownSkillKind, string> = {
  db: "Database",
  fram: "Framework",
  lang: "Language",
  meth: "Methodology",
  prov: "Cloud provider",
  soft: "Soft skill",
  supp: "Support",
  tool: "Tool",
};
