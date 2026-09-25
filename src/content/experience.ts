export type Role = {
  id: string;
  company: string;
  title: string;
  when: string;
  location?: string;
  current?: boolean;
  kind: "blockchain" | "it";
  story?: string;
  summary?: string;
  points: string[];
  sme?: { title: string; items: string[] };
  tags?: string[];
  caseStudies?: string[];
};

export const currentRole: Role & { focus: string[] } = {
  id: "appmindsglobal",
  company: "AppMindsGlobal",
  title: "Blockchain Consultant",
  when: "May 2026 – Present",
  current: true,
  kind: "blockchain",
  story: "Multi-chain token infrastructure + technical consulting",
  summary:
    "Consulting, architecture and hands-on engineering for token infrastructure engagements — from clarifying requirements and shaping the multi-chain design through deployment, verification and audit handoff.",
  points: [
    "Architect and deliver multi-chain token infrastructure spanning token deployment, bridging, vesting and staking.",
    "Design cross-chain architecture across EVM networks and Solana, including LayerZero-oriented token messaging.",
    "Own deterministic CREATE2-based deployment, deployment automation, contract verification and audit handoff.",
    "Bring security considerations into design reviews before code is written.",
    "Provide technical consulting on RWA and token-infrastructure design decisions.",
  ],
  focus: [
    "Multi-chain token infrastructure",
    "RWA",
    "Token deployment",
    "Bridging",
    "Vesting",
    "Staking",
    "EVM",
    "Solana",
    "Cross-chain architecture",
    "CREATE2",
    "LayerZero-oriented architecture",
    "Deployment automation",
    "Verification",
    "Audit handoff",
    "Technical consulting",
  ],
  caseStudies: ["rbc-frk"],
};

export const blockchainRoles: Role[] = [
  {
    id: "gft-lead",
    company: "G Future Tech",
    title: "SME / Lead Blockchain Developer",
    when: "Oct 2024 – Jul 2026",
    kind: "blockchain",
    story: "Blockchain financial infrastructure · DeFi · RWA · crypto-backed systems · governance · protocol development",
    summary:
      "Blockchain SME for smart-contract architecture and lead developer for protocol development across blockchain-based financial and governance ecosystems, including REAL Governance and USDAO. The work spanned both crypto-backed and real-world-asset-backed financial infrastructure, from design through security review and deployment.",
    points: [
      "Contributed to the development of the REAL Governance ecosystem: governance mechanisms, protocol logic, on-chain execution and token / protocol infrastructure.",
      "Designed and developed USDAO financial infrastructure across crypto-backed and RWA-backed models — stablecoin infrastructure, collateralization, lending and borrowing, liquidity, liquidation, oracle integration and on-chain operational controls.",
      "Designed compliance-ready RWA token infrastructure using ERC-3643 concepts (identity, registry, compliance, controlled transfers), with Fireblocks-based multisignature, treasury and transfer-vault flows.",
      "Designed and deployed multi-chain token infrastructure using deterministic, CREATE2-based deployment patterns.",
      "Owned testing strategy, security analysis, audit preparation, deployment and contract verification across supported networks.",
    ],
    sme: {
      title: "Blockchain SME / Technical Expertise",
      items: [
        "Smart-contract architecture and protocol design discussions",
        "Translating business and product requirements into blockchain implementations",
        "Technical problem solving and security analysis",
        "Testing strategy, deployment planning and audit preparation",
        "Technical guidance and SME-level blockchain expertise for engineering, backend, wallet, compliance and product stakeholders",
      ],
    },
    tags: ["REAL Governance", "USDAO", "Crypto-backed", "RWA-backed", "DeFi", "Stablecoins", "Governance", "ERC-3643", "CREATE2"],
    caseStudies: ["real-governance", "usdao", "realproton"],
  },
  {
    id: "maavatar",
    company: "Maavatar",
    title: "Smart Contract Manager / Blockchain SME (Consultant)",
    when: "Dec 2024 – Feb 2026",
    kind: "blockchain",
    story: "Blockchain SME · blockchain-backed metaverse · digital identity · NFTs · Web3 ecosystem",
    summary:
      "Blockchain subject-matter expert and core technical contributor to the development of a blockchain-backed metaverse ecosystem — building the blockchain foundation beneath digital identity, digital assets, ownership and on-chain interaction.",
    points: [
      "Designed and developed Solidity smart contracts for the ecosystem, including ERC-1155 dynamic NFTs with mutable metadata, NFT tiers and evolving digital identities.",
      "Worked on digital-asset representation and NFT ownership models across identities, NFTs and ecosystem assets.",
      "Supported wallet connectivity, Web3 and blockchain / application integration, and DAO / DeFi interoperability.",
      "Covered contract testing, security analysis and deployment.",
    ],
    sme: {
      title: "Blockchain SME contribution",
      items: [
        "Provided blockchain technical direction and advised on architecture and smart-contract design",
        "Helped translate the metaverse product vision into blockchain components",
        "Designed token / NFT mechanisms and defined ownership models",
        "Solved blockchain-specific technical problems and supported development teams",
        "Contributed to architecture decisions and implementation approaches, evolving the blockchain architecture as ecosystem requirements changed",
      ],
    },
    tags: ["Metaverse", "Blockchain SME", "ERC-1155", "Dynamic NFTs", "Digital identity", "Web3 integration"],
    caseStudies: ["maavatar"],
  },
  {
    id: "brane",
    company: "Brane Enterprises Pvt. Ltd.",
    title: "Senior Blockchain Developer",
    when: "Aug 2022 – Nov 2024",
    kind: "blockchain",
    points: [
      "Designed and implemented enterprise-grade Solidity contracts and translated contract logic into the Natural Solution Language (NSL) framework.",
      "Built automated contract-generation, validation and deployment-oriented workflows.",
      "Reviewed and audited contracts with Slither, MythX and Mythril, identifying security and quality issues before release.",
      "Validated NSL-generated solutions for functional correctness, industry standards, security and efficiency.",
      "Developed and integrated DApps, supported testing, and mentored team members on blockchain concepts and engineering best practices.",
    ],
    tags: ["Enterprise", "Automation", "Security reviews", "Mentoring"],
  },
  {
    id: "gft-dev",
    company: "G Future Tech Pvt. Ltd.",
    title: "Blockchain Developer",
    when: "Apr 2021 – Aug 2022",
    kind: "blockchain",
    points: [
      "Developed and tested Solidity contracts for stablecoins and related Web3 use cases across EVM-compatible networks.",
      "Implemented or supported NFT, remittance, launchpad, lending / borrowing and gaming use cases.",
      "Performed security reviews and contract optimization with Mythril, MythX and Slither.",
    ],
    tags: ["Stablecoins", "EVM", "Hardhat"],
  },
  {
    id: "zeromile",
    company: "Zeromile Research & Development LLC",
    title: "Blockchain Developer",
    when: "Feb 2021 – Mar 2021",
    kind: "blockchain",
    points: [
      "Developed ERC-20 token contracts and tested deployments on the Ropsten test network.",
      "Designed a factory contract for a dual-token liquidity pool and staking workflow.",
      "Worked with UI developers to integrate DApp interfaces with contract functions.",
    ],
    tags: ["ERC-20", "Factory pattern", "Staking"],
  },
  {
    id: "thynkblynk",
    company: "ThynkBlynk Technologies",
    title: "Blockchain Intern",
    when: "Sep 2020 – Dec 2020",
    location: "Hyderabad",
    kind: "blockchain",
    points: ["Developed and deployed Solidity smart contracts on Ethereum using the .NET ecosystem and Web3 tooling."],
  },
];

export const earlierRoles: Role[] = [
  {
    id: "maps",
    company: "MAPS Investments FZ LLC",
    title: "IT Support Engineer",
    when: "Dec 2014 – Apr 2015",
    location: "Dubai",
    kind: "it",
    points: ["Maintained online forex and commodities trading portals, prepared client transaction reports and managed portal content."],
  },
  {
    id: "octagon",
    company: "Octagon International",
    title: "IT Support Engineer",
    when: "Jan 2014 – Nov 2014",
    location: "Dubai",
    kind: "it",
    points: ["Website testing, coordinating corrections with designers, OS and application setup, and IT systems maintenance."],
  },
  {
    id: "diodes",
    company: "Diodes IT Services",
    title: "Software Testing Engineer",
    when: "Dec 2012 – Dec 2013",
    location: "Dubai",
    kind: "it",
    points: ["Functional, performance, system-integration and user-acceptance testing, including metrics collection and process-data validation."],
  },
  {
    id: "infosys",
    company: "Infosys Limited",
    title: "Software Testing Engineer",
    when: "Jul 2008 – Sep 2011",
    location: "Hyderabad",
    kind: "it",
    points: [
      "Supported CMMI Level 5 implementation activities within the IT department.",
      "Metrics collection, process-data validation and user-acceptance testing of internal applications.",
      "Worked with HP Quality Center and QTP-based testing processes.",
    ],
  },
];

export const infosysAward = {
  title: "Unit Level Outstanding Performance Award",
  org: "Infosys Limited",
  when: "H1 2010–2011",
  areas: ["Knowledge management", "Training", "Tools", "Employee engagement"],
};

export const journey = [
  { year: "2008", label: "Software Testing", note: "Infosys — CMMI L5, UAT, metrics", status: "done" },
  { year: "2012", label: "IT Engineering", note: "Testing & IT support, Dubai", status: "done" },
  { year: "2019", label: "Blockchain Engineering", note: "PG Diploma, IIIT Bangalore; first deployments", status: "done" },
  { year: "2021", label: "Smart Contracts", note: "ERC-20, factories, staking", status: "done" },
  { year: "2021", label: "DeFi", note: "Stablecoins, lending, crypto-backed models", status: "done" },
  { year: "2024", label: "RWA", note: "USDAO, RealProton, ERC-3643", status: "done" },
  { year: "2024", label: "Blockchain-powered Ecosystems", note: "Maavatar metaverse — Blockchain SME", status: "done" },
  { year: "2024–26", label: "Multi-chain Architecture", note: "CREATE2, bridging, LayerZero-oriented", status: "done" },
  { year: "2026", label: "Technical Consulting", note: "Blockchain Consultant, AppMindsGlobal", status: "now" },
  { year: "Next", label: "Blockchain Architecture / Technical Leadership", note: "System-level ownership", status: "next" },
] as const;
