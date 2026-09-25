// Leadership content is deliberately qualitative. Each pillar carries an
// "evidence" line that points back to a real role — no invented team sizes.

export type Pillar = {
  id: string;
  title: string;
  lede: string;
  short: string;
  items: string[];
  evidence: string[];
};

export const pillars: Pillar[] = [
  {
    id: "architecture",
    short: "Smart-contract architecture, protocol design, RWA, DeFi, multi-chain and security architecture.",
    title: "Architecture Leadership",
    lede: "Shaping how token, RWA and DeFi systems are structured before the first contract is written.",
    items: [
      "Smart-contract architecture",
      "Protocol design",
      "RWA architecture",
      "DeFi architecture",
      "Multi-chain architecture",
      "Token lifecycle design",
      "Security architecture",
      "Deployment strategy",
    ],
    evidence: [
      "Smart-contract architecture and protocol design for REAL Governance and USDAO — G Future Tech",
      "Blockchain architecture direction for a blockchain-backed metaverse — Maavatar",
    ],
  },
  {
    id: "delivery",
    short: "Requirements → architecture → development → testing → security → deployment, owned end to end.",
    title: "Technical Delivery",
    lede: "Owning the path from requirement to verified production contracts.",
    items: [
      "Requirements analysis",
      "Architecture planning",
      "Development",
      "Testing",
      "Security review",
      "Audit preparation",
      "Deployment",
      "Verification",
      "Production troubleshooting",
    ],
    evidence: [
      "Audit preparation, test-coverage reviews, redeployment and verification — RealProton",
      "CREATE2-based multi-chain deployment and deployment verification — G Future Tech",
    ],
  },
  {
    id: "enablement",
    short: "Technical guidance, architecture reviews, technical problem solving and knowledge sharing.",
    title: "Blockchain SME",
    lede: "Being the person teams turn to for blockchain answers — and raising the engineering bar around me.",
    items: [
      "Blockchain subject-matter expertise",
      "Technical guidance",
      "Architecture reviews",
      "Code reviews",
      "Knowledge sharing",
      "Engineering best practices",
      "Technical problem solving",
      "Cross-functional collaboration",
    ],
    evidence: [
      "Blockchain SME for a blockchain-backed metaverse ecosystem — Maavatar",
      "Blockchain SME / technical expertise across financial infrastructure — G Future Tech",
      "Mentored team members on blockchain concepts and best practices — Brane Enterprises",
    ],
  },
  {
    id: "stakeholder",
    short: "Requirements clarification, architecture discussions, documentation and collaboration across product, engineering and business.",
    title: "Stakeholder & Client Consulting",
    lede: "Translating business intent into blockchain systems people can operate.",
    items: [
      "Requirement clarification",
      "Architecture discussions",
      "Business → blockchain translation",
      "Technical documentation",
      "Deployment planning",
      "Product, backend, wallet & compliance teams",
    ],
    evidence: [
      "Translated product requirements into blockchain implementations — G Future Tech and Maavatar",
      "Blockchain Consultant — AppMindsGlobal",
    ],
  },
];

export const leadershipModel = [
  { step: "Business Requirement", note: "What outcome, for whom, under which constraints" },
  { step: "Technical Discovery", note: "Chains, standards, custody, integrations, unknowns" },
  { step: "Architecture", note: "Contract boundaries, roles, upgrade and deployment model" },
  { step: "Security & Risk", note: "Threats, privileged roles, failure modes, trust assumptions" },
  { step: "Engineering", note: "Implementation against agreed interfaces" },
  { step: "Testing", note: "Unit, integration and scenario coverage" },
  { step: "Audit / Review", note: "Static analysis, internal review, audit handoff" },
  { step: "Deployment", note: "Deterministic, scripted, verified on every network" },
  { step: "Production", note: "Operational controls, monitoring, support" },
  { step: "Continuous Improvement", note: "Lessons fed back into the next design" },
];

export const leadershipPage = [
  {
    id: "strategy",
    title: "Technical Strategy",
    items: ["Architecture planning", "Technology evaluation", "Protocol design", "Security strategy", "Deployment strategy"],
    body: "Choosing the right standards, chains and custody model is a strategic decision with long-lived consequences. I evaluate options against compliance needs, operational reality and upgrade paths — e.g. ERC-3643 for permissioned RWA transfers, CREATE2 for address consistency, OFT-style messaging for unified cross-chain supply.",
    evidence: "REAL Governance, USDAO, RealProton, Maavatar",
  },
  {
    id: "engineering",
    title: "SME & Engineering Guidance",
    items: ["Blockchain SME", "Architecture reviews", "Code reviews", "Technical guidance", "Engineering standards"],
    body: "As a blockchain SME I help teams turn product ideas into blockchain components — advising on architecture and contract design, defining ownership and token mechanisms, and unblocking blockchain-specific problems. Reviews are where standards become real: I review contracts for correctness, access control and upgrade safety, and use those reviews to teach, not just to gate.",
    evidence: "Blockchain SME at Maavatar and G Future Tech; security reviews at G Future Tech and Brane; mentoring at Brane Enterprises",
  },
  {
    id: "delivery",
    title: "Delivery Leadership",
    items: ["Requirements", "Planning", "Development", "Testing", "Audit", "Deployment", "Production support"],
    body: "Smart contracts are unforgiving after deployment, so delivery has to be deliberate: test coverage reviewed before audit, deployments scripted and verified, redeployments planned rather than improvised.",
    evidence: "RealProton audit preparation and Avalanche deployments; multi-chain CREATE2 deployments at G Future Tech",
  },
  {
    id: "stakeholders",
    title: "Stakeholder Leadership",
    items: ["Product", "Backend", "Wallet", "Compliance", "Business", "Clients"],
    body: "Most blockchain risk sits at the boundaries — between contracts and APIs, custody and operations, compliance and code. I work across those boundaries so that each team understands what the contracts guarantee and what they do not.",
    evidence: "Cross-team collaboration at G Future Tech and Maavatar; consulting at AppMindsGlobal",
  },
  {
    id: "knowledge",
    title: "Knowledge Leadership",
    items: ["Mentoring", "Documentation", "Knowledge sharing", "Training", "Blockchain education"],
    body: "Knowledge sharing has been a thread through my whole career — from knowledge-management and training work recognised at Infosys to mentoring developers on blockchain fundamentals and an ongoing interest in blockchain education content.",
    evidence: "Infosys Unit Level Outstanding Performance Award; mentoring at Brane Enterprises",
  },
];

export const storyArc = [
  "I can build it",
  "I can architect it",
  "I can secure it",
  "I can lead its delivery",
  "I can work with stakeholders",
  "I can mentor engineers",
  "I can think about the system end-to-end",
];

export const leadershipFormula = [
  "Engineering",
  "Architecture",
  "Security",
  "Delivery",
  "SME guidance",
  "Stakeholder management",
];
