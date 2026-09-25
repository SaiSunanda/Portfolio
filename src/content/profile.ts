// Single source of truth for identity, contact and positioning copy.
// Every factual claim on the site should trace back to the resume in /public.

export const profile = {
  name: "Sunanda Vempati",
  location: "Hyderabad, India",
  roles: ["Blockchain Architect", "Smart Contract Architect", "Web3 Technical Lead"],
  specialisms: ["Blockchain Consultant", "Smart Contract SME", "RWA", "DeFi", "Multi-chain", "Metaverse"],
  focus: ["RWA", "DeFi", "Token Infrastructure", "Cross-Chain", "EVM", "Solana"],
  headline:
    "Designing secure blockchain systems across RWA, DeFi, token infrastructure, cross-chain protocols and blockchain-powered ecosystems.",
  credibility: [
    { k: "15+", v: "Years IT experience" },
    { k: "7+", v: "Years blockchain" },
    { k: "RWA · DeFi", v: "Tokenization" },
    { k: "EVM · Solana", v: "Multi-chain" },
    { k: "SME", v: "Technical leadership" },
  ],
  subline:
    "Building secure token infrastructure, RWA protocols, DeFi systems and blockchain-powered ecosystems across EVM and Solana.",
  summary:
    "Senior blockchain engineer with architecture depth and SME-level technical leadership — 15+ years of overall IT experience and 7+ years specialising in blockchain across EVM and Solana.",
  about:
    "My career has evolved from software testing and IT engineering into blockchain development, smart-contract architecture, consulting and technical leadership. I work across DeFi, RWA, token infrastructure, cross-chain systems and blockchain-powered ecosystems, combining hands-on engineering depth with architecture, security, delivery and SME-level technical guidance.",
  email: "Vempati.SaiSunanda@gmail.com",
  github: "https://github.com/SaiSunanda",
  githubLabel: "github.com/SaiSunanda",
  linkedin: "https://www.linkedin.com/in/Sunanda-Vempati",
  linkedinLabel: "linkedin.com/in/Sunanda-Vempati",
  resume: "/Sunanda_Vempati_Resume.pdf",
} as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/architecture", label: "Architecture" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/quantum", label: "Quantum" },
  { href: "/contact", label: "Contact" },
] as const;

export const education = [
  {
    title: "PG Diploma in Software Development — Blockchain Specialization",
    org: "IIIT Bangalore & upGrad",
    when: "May 2019 – Jul 2020",
  },
  {
    title: "PG Diploma in Management",
    org: "Indira Gandhi National Open University",
    when: "Dec 2009 – Apr 2012",
  },
  {
    title: "B.Sc. Mathematics, Physics & Electronics",
    org: "Osmania University, Hyderabad",
    when: "Jun 2005 – Apr 2008",
  },
];

export const currentLearning = {
  title: "Quantum Computing",
  org: "Indian Institute of Science (IISc), Bengaluru",
  status: "In progress",
};

export const training = [
  "Complete Course on Understanding Blockchain Technology — Udemy",
  "Decentralized Finance (DeFi) Primitives — Coursera",
  "Blockchain Bootcamp: Enterprise Applications with Hyperledger Fabric v2 — Chainstack",
  "Blockchain Technology & Its Applications — Webinar, Dr. M.G.R. Educational and Research Institute",
  "Can Blockchain Save Our Cities — Webinar, IEEE Computer Society Kerala Chapter",
];

// Grouped, not a technology wall. Only tools supported by the resume.
export const skills = [
  { group: "Blockchain", items: ["Solidity", "Rust", "EVM", "Solana"] },
  { group: "Protocols", items: ["RWA", "DeFi", "Stablecoins", "Tokenization", "Governance"] },
  { group: "Standards", items: ["ERC-20", "ERC-721", "ERC-1155", "ERC-3643", "ERC-4907", "ERC-5218"] },
  { group: "Infrastructure", items: ["CREATE2", "Cross-chain", "LayerZero-oriented architecture", "Fireblocks"] },
  { group: "Security", items: ["Slither", "MythX", "Mythril", "OpenZeppelin"] },
  { group: "Development", items: ["Hardhat", "Truffle", "Remix", "Web3.py", "Ethers.js"] },
  { group: "Languages", items: ["JavaScript", "Node.js", "Python", "Java", "Flask"] },
];

export const snapshot = [
  { k: "Current role", v: "Blockchain Consultant — AppMindsGlobal" },
  { k: "Experience", v: "15+ years IT · 7+ years blockchain" },
  { k: "Core focus", v: "Blockchain architecture · Smart contracts · RWA · DeFi · Multi-chain" },
  { k: "Networks", v: "EVM · Ethereum · Avalanche · Polygon · Arbitrum · Base · Solana" },
  { k: "Specialization", v: "Token infrastructure · RWA · DeFi · Governance · Cross-chain · Metaverse" },
  { k: "Leadership", v: "Blockchain SME · Architecture · Technical guidance · Consulting" },
  { k: "Current learning", v: "Quantum Computing — IISc Bengaluru" },
  { k: "Location", v: "Hyderabad, India" },
];
