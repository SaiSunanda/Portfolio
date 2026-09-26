// Homepage "Selected systems". Each field is drawn from the resume and the
// case studies; roles are read from experience.ts so titles stay in sync.
export type SelectedSystem = {
  slug: string;
  title: string;
  roleId: "appmindsglobal" | "gft-lead" | "maavatar";
  system: string;
  problem: string;
  decision: string;
  delivery: string;
  diagram: string[];
};

export const selectedSystems: SelectedSystem[] = [
  {
    slug: "rbc-frk",
    title: "RBC / FRK",
    roleId: "appmindsglobal",
    system: "Multi-chain token infrastructure across EVM networks, designed with Solana in scope.",
    problem: "Make one token behave as a single system across networks: consistent addresses, one logical supply and repeatable, verified releases.",
    decision: "CREATE2 deterministic deployment with a LayerZero OFT-oriented cross-chain model rather than a custom bridge.",
    delivery: "Deployed and validated across multiple EVM networks, with deployment automation, contract verification and audit handoff.",
    diagram: ["EVM networks", "OFT messaging", "Unified token"],
  },
  {
    slug: "realproton",
    title: "RealProton",
    roleId: "gft-lead",
    system: "Compliance-oriented real-estate tokenization.",
    problem: "Enforce investor eligibility, jurisdictional rules and lock-ups on every transfer — while staying operable by the issuer's teams.",
    decision: "ERC-3643 identity, claims and modular compliance, with privileged roles held in Fireblocks multisignature vaults.",
    delivery: "Audit preparation, test-coverage reviews, redeployment, contract verification and Avalanche deployment.",
    diagram: ["Identity", "Compliance", "ERC-3643"],
  },
  {
    slug: "usdao",
    title: "USDAO",
    roleId: "gft-lead",
    system: "Stablecoin and DeFi infrastructure across crypto-backed and RWA-backed models.",
    problem: "Keep a USD-pegged system solvent when collateral ranges from volatile crypto assets to illiquid real-world assets.",
    decision: "Shared protocol infrastructure with per-collateral risk parameters, oracle inputs and liquidation / recovery paths.",
    delivery: "Protocol architecture and smart-contract development across collateralization, lending, liquidation, oracles and governance.",
    diagram: ["Collateral", "Oracle", "Solvency"],
  },
  {
    slug: "maavatar",
    title: "Maavatar",
    roleId: "maavatar",
    system: "The blockchain foundation of a metaverse ecosystem.",
    problem: "Identities that evolve over time while ownership stays trustworthy across NFT, DeFi and DAO components.",
    decision: "ERC-1155 identity and asset classes, with metadata evolution restricted to permissioned paths.",
    delivery: "ERC-1155 dynamic NFT infrastructure, wallet and Web3 integration, and technical direction as Blockchain SME.",
    diagram: ["Identity", "Ownership", "ERC-1155"],
  },
];
