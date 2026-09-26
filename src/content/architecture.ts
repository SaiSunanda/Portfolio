export type Blueprint = {
  id: string;
  title: string;
  kicker: string;
  flow: string[];
  intent: string;
  concerns: string[];
  seenIn?: { label: string; href: string };
  wide?: boolean;
};

export const blueprints: Blueprint[] = [
  {
    id: "token",
    title: "Token Infrastructure",
    kicker: "Lifecycle",
    flow: ["Token", "Deployment", "Vesting", "Staking", "Treasury", "Bridge", "Multi-chain"],
    intent:
      "A token is a system, not a contract. Issuance, release schedules, incentives, treasury custody and cross-chain supply each carry their own roles, failure modes and operational owners.",
    concerns: [
      "Who can mint, pause or upgrade — and through which multisig",
      "Vesting and staking contracts that cannot drain treasury under edge cases",
      "One canonical supply across every chain the token lives on",
      "Identical, verifiable addresses so integrators trust what they see",
    ],
    seenIn: { label: "RBC / FRK", href: "/case-studies/rbc-frk" },
  },
  {
    id: "rwa",
    title: "Real-World Assets",
    kicker: "Compliance",
    flow: ["Asset", "Identity", "Compliance", "Registry", "Token", "Controlled Transfer", "Custody"],
    intent:
      "RWA tokens must enforce off-chain rules on-chain. Transfers are only valid between verified identities, under jurisdictional and lock-up rules, with privileged agents for recovery and enforcement.",
    concerns: [
      "Identity and claim verification before any balance moves",
      "Modular compliance rules that can evolve without redeploying the token",
      "Agent permissions: freeze, force-transfer and recovery, tightly scoped",
      "Institutional custody with approval policies for issuer and treasury flows",
    ],
    seenIn: { label: "RealProton", href: "/case-studies/realproton" },
  },
  {
    id: "defi",
    title: "DeFi Protocol",
    kicker: "Solvency",
    flow: ["Collateral", "Oracle", "Lending", "Borrowing", "Interest", "Liquidation", "Treasury"],
    intent:
      "Lending protocols are solvency machines. Every design decision — collateral factors, oracle choice, liquidation incentives — is ultimately about keeping the system over-collateralised under stress.",
    concerns: [
      "Oracle freshness, manipulation resistance and fallback behaviour",
      "Collateral-ratio thresholds tuned per asset risk profile",
      "Liquidations that remain profitable to execute in volatile markets",
      "Reserve accounting and recovery paths when positions go under",
    ],
    seenIn: { label: "USDAO", href: "/case-studies/usdao" },
  },
  {
    id: "crosschain",
    title: "Cross-Chain",
    kicker: "Interoperability",
    flow: ["Chain A", "Messaging / Bridge", "Token Representation", "Chain B"],
    intent:
      "Cross-chain design is trust design. The question is always: who attests that an event on Chain A happened, and what does Chain B do if that attestation is wrong?",
    concerns: [
      "Burn-and-mint vs lock-and-release, and where the canonical supply lives",
      "Peer configuration — only trusted remote contracts may send messages",
      "Verifier / DVN configuration and the security it actually provides",
      "Rate limits and pause paths if one side is compromised",
    ],
    seenIn: { label: "RBC / FRK", href: "/case-studies/rbc-frk" },
  },
  {
    id: "metaverse",
    title: "Blockchain-backed Metaverse",
    kicker: "Ownership",
    flow: ["Digital Identity", "Wallet", "Digital Assets", "NFT", "Ownership", "Smart Contracts", "On-chain Interaction", "Metaverse Ecosystem"],
    intent:
      "When blockchain is the foundation of a metaverse rather than a feature, identity, assets and ownership become shared primitives. Every other component — DAO, DeFi, the experience itself — trusts what the contracts say a user is and owns.",
    concerns: [
      "Identities that evolve without losing ownership or authenticity",
      "Explicit ownership models for every asset type",
      "Permissioned metadata changes, so tokens keep their meaning",
      "Interfaces other components can rely on as the ecosystem grows",
    ],
    seenIn: { label: "Maavatar", href: "/case-studies/maavatar" },
  },
];

export type Decision = {
  id: string;
  question: string;
  summary: string;
  decision: string;
  impact: string;
  featured?: boolean;
  context: string;
  considerations: string[];
  tradeoff: string;
  appliedIn: string;
};

export const decisions: Decision[] = [
  {
    id: "create2",
    decision: "Deploy through a CREATE2 factory with identical init code on every EVM network, moving chain-specific configuration into protected post-deploy initialisation.",
    impact: "One verifiable token address across EVM networks, and releases that can be reproduced and checked before deployment.",
    summary: "Deterministic deployment gives one predictable address on every EVM network — easier to integrate, verify and trust.",
    featured: true,
    question: "Why CREATE2?",
    context:
      "Multi-chain tokens are easier to integrate, audit and trust when the contract lives at the same address everywhere.",
    considerations: [
      "Address = keccak256(0xff ‖ deployer ‖ salt ‖ keccak256(initCode)) — deterministic and computable before deployment.",
      "Identical addresses require an identical deployer (usually a factory at the same address) and identical init code, including constructor arguments.",
      "Chain-specific configuration should move out of the constructor into post-deploy initialisation, so init code stays the same.",
      "Salts and deployer keys become part of the release process — they need the same care as any other deployment secret.",
    ],
    tradeoff:
      "Determinism pushes configuration into initialisation functions, which must then be protected against front-running and double-initialisation.",
    appliedIn: "RBC / FRK · G Future Tech multi-chain token infrastructure",
  },
  {
    id: "erc3643",
    decision: "Model regulated assets as ERC-3643 permissioned tokens: identity registry, claim topics, trusted issuers and a modular compliance contract, with tightly scoped agent roles.",
    impact: "Transfer eligibility is enforced at protocol level, and compliance rules can evolve without redeploying the token.",
    summary: "Compliance-oriented tokenization: transfers only succeed between verified identities under modular transfer rules.",
    featured: true,
    question: "Why ERC-3643?",
    context:
      "Securities-style real-world assets cannot be freely transferable bearer tokens. The token must know who may hold it.",
    considerations: [
      "Transfers are gated by an identity registry: sender and receiver must hold verified on-chain identities.",
      "Claim topics and trusted issuers define which attestations (e.g. KYC, jurisdiction) are required.",
      "A modular compliance contract enforces rules — country restrictions, holder limits, lock-ups — without changing the token.",
      "Agent roles support freezing, forced transfers and wallet recovery, which regulated assets need but which must be tightly governed.",
    ],
    tradeoff:
      "Compliance adds gas cost and integration complexity, and concentrates power in agent roles — so custody and role design matter as much as the token.",
    appliedIn: "RealProton · compliance-ready RWA tokenization",
  },
  {
    id: "erc1155",
    decision: "Represent identities, NFT tiers and digital assets as ERC-1155 token classes, with metadata evolution restricted to permissioned paths.",
    impact: "Many asset types in one contract, batch operations, and identities that evolve while ownership stays stable.",
    summary: "Flexible multi-token contracts for identities, tiers and dynamic digital assets in one place.",
    featured: true,
    question: "Why ERC-1155?",
    context:
      "Ecosystems with identities, tiers and many asset types need more than one-token-per-contract NFTs.",
    considerations: [
      "One contract can hold many token classes — identities, NFT tiers and fungible or semi-fungible assets.",
      "Batch transfers and mints reduce gas and simplify multi-asset interactions.",
      "Per-token metadata URIs support dynamic metadata, but mutation rules must be designed explicitly.",
      "Wallet and marketplace support is broad, which matters for ownership users can actually see.",
    ],
    tradeoff:
      "Flexibility moves design burden into the contract: what each token ID means, who may change its metadata, and how supply is controlled must all be defined up front.",
    appliedIn: "Maavatar · blockchain-backed metaverse identities and assets",
  },
  {
    id: "layerzero",
    decision: "Use a LayerZero OFT-oriented model with explicitly peered deployments instead of building a custom bridge.",
    impact: "One logical supply across chains, with the cross-chain trust dependency made explicit and documented for stakeholders.",
    summary: "One logical token supply across networks, moved by messaging between trusted peers rather than wrapped copies.",
    featured: true,
    question: "Why LayerZero / OFT?",
    context:
      "A token that lives on several chains needs a single, coherent supply rather than a set of unrelated wrapped copies.",
    considerations: [
      "The OFT pattern debits on the source chain and credits on the destination, keeping total supply consistent across chains.",
      "An adapter variant can wrap an existing token with lock-and-release where the original contract cannot change.",
      "Each deployment must be explicitly peered with its remote counterparts; unpeered contracts must reject messages.",
      "Security depends on verifier (DVN) and executor configuration — defaults should be reviewed, not assumed.",
    ],
    tradeoff:
      "Messaging infrastructure removes the need to build a bespoke bridge, but introduces an external trust dependency that must be documented for stakeholders.",
    appliedIn: "RBC / FRK · LayerZero OFT-oriented bridging and cross-chain supply",
  },
  {
    id: "fireblocks",
    decision: "Hold privileged roles in policy-controlled Fireblocks vaults separated by responsibility — issuer, treasury, transfer vault, legal — with multisignature approvals.",
    impact: "No single key can execute issuer, treasury or agent actions, and every privileged approval is auditable.",
    summary: "Institutional custody and policy-driven approvals for the most privileged asset operations.",
    featured: true,
    question: "Why Fireblocks?",
    context:
      "Institutional issuers need to operate privileged roles — minting, treasury moves, agent actions — without single-key risk.",
    considerations: [
      "MPC-based custody removes single private keys from operational flows.",
      "Vault separation maps naturally to responsibilities: issuer, treasury, transfer vault, legal / administrative.",
      "Policy rules and approval quorums turn operational procedures into enforced controls.",
      "Contract roles should be designed with the custody model in mind, not bolted on afterwards.",
    ],
    tradeoff:
      "Custody platforms add operational dependency and cost; the benefit is auditable, policy-driven control over the most dangerous transactions.",
    appliedIn: "RealProton · G Future Tech wallet and treasury architecture",
  },
  {
    id: "evm-solana",
    decision: "Keep one product specification with chain-native implementations: CREATE2 and ERC-20 contracts on EVM, SPL tokens and program-derived addresses on Solana.",
    impact: "Each chain follows its own execution and security model instead of a lowest-common-denominator port.",
    summary: "One product spec, two execution models — chain-appropriate implementations rather than forcing one chain's patterns onto the other.",
    featured: true,
    question: "EVM + Solana",
    context:
      "Serving users on both ecosystems means designing one product across two very different execution models.",
    considerations: [
      "EVM contracts own their storage; Solana programs are stateless and operate on accounts passed into each instruction.",
      "Deterministic addresses: CREATE2 on EVM, program-derived addresses (PDAs) on Solana — similar goal, different mechanics.",
      "Tokens: ERC-20 contracts per token on EVM vs the shared SPL Token / Token-2022 programs with mint and token accounts on Solana.",
      "Tooling, fee models, account rent and upgrade authority all differ — so do the security review checklists.",
    ],
    tradeoff:
      "A shared product spec with chain-specific implementations is usually safer than forcing one chain's patterns onto the other.",
    appliedIn: "AppMindsGlobal multi-chain engagements",
  },
  {
    id: "collateral-models",
    decision: "Share infrastructure across crypto-backed and RWA-backed collateral while keeping risk parameters, pricing inputs and recovery paths per collateral type.",
    impact: "Both models coexist without the volatile asset's rules governing the illiquid one, or vice versa.",
    summary: "Crypto and real-world collateral share infrastructure but need separate risk, pricing and liquidation rules.",
    question: "Crypto-backed vs RWA-backed models",
    context:
      "Financial infrastructure that accepts both crypto and real-world assets as collateral has to treat them as different risks inside one system.",
    considerations: [
      "Crypto collateral is liquid and priced continuously, but volatile — liquidation must be fast.",
      "RWA collateral is more stable in value but illiquid and priced slowly — it needs conservative ratios and recovery paths beyond liquidation.",
      "RWA brings eligibility and transfer rules (e.g. ERC-3643) that crypto collateral does not.",
      "Oracle design differs: market feeds for crypto, valuation and attestation inputs for real-world assets.",
    ],
    tradeoff:
      "Sharing infrastructure across both models reduces duplication, but only if risk parameters, pricing and liquidation are configured per collateral type.",
    appliedIn: "USDAO · G Future Tech financial infrastructure",
  },
  {
    id: "metaverse-architecture",
    decision: "Put identity, ownership and key interactions on-chain; keep rendering, media and AI off-chain.",
    impact: "Shared primitives the rest of the ecosystem can trust, without paying on-chain cost for everything.",
    summary: "Decide what the chain is the source of truth for — identity, ownership, interaction — and design everything around it.",
    question: "Blockchain-backed metaverse architecture",
    context:
      "In a blockchain-backed metaverse, the chain is the source of truth for identity and ownership — so its design shapes the whole product.",
    considerations: [
      "Decide early what lives on-chain (identity, ownership, key interactions) and what stays off-chain (rendering, heavy media, AI).",
      "Model identities and assets as token classes with explicit ownership semantics.",
      "Control how dynamic metadata can change, and by whom.",
      "Expose stable interfaces so NFT, DAO and DeFi components can build on the same primitives.",
    ],
    tradeoff:
      "Putting more on-chain increases trust and interoperability but adds cost and rigidity; the architecture has to evolve as product requirements change.",
    appliedIn: "Maavatar · Blockchain SME and core technical contributor",
  },
];

export const securityLifecycle = [
  "Architecture",
  "Threat Modeling",
  "Implementation",
  "Testing",
  "Static Analysis",
  "Security Review",
  "Audit Preparation",
  "Deployment",
  "Verification",
];

export const securityTools = [
  { name: "Slither", role: "Static analysis and detectors across the codebase" },
  { name: "Mythril", role: "Symbolic execution for exploitable paths" },
  { name: "MythX", role: "Combined analysis used in earlier review workflows" },
  { name: "OpenZeppelin", role: "Reviewed building blocks for access control and token standards" },
];

export const securityPractices = [
  "Vulnerability analysis",
  "Contract testing",
  "Security reviews",
  "Contract reviews",
  "Test-coverage reviews",
  "Gas optimization",
  "Audit preparation",
  "Deployment verification",
];

// Home: four architecture specializations. Items are the concerns each domain
// has to answer — architecture vocabulary, not claims about a specific system.
export const specializations = [
  {
    n: "01",
    title: "RWA Architecture",
    line: "Regulated assets where eligibility and transfer rules live in the protocol.",
    items: ["Identity", "Claims", "Compliance", "ERC-3643", "Asset lifecycle", "Custody", "Controlled transfers"],
    href: "/architecture#domains",
  },
  {
    n: "02",
    title: "DeFi Architecture",
    line: "Financial protocols designed around solvency under stress.",
    items: ["Collateral", "Oracles", "Vaults", "Lending", "Liquidation", "Solvency", "Treasury controls"],
    href: "/architecture#domains",
  },
  {
    n: "03",
    title: "Multi-chain Token Infrastructure",
    line: "One token system across networks, with an explicit trust model.",
    items: ["EVM", "Solana", "Deterministic deployment", "Cross-chain messaging", "Supply reconciliation", "Bridge controls", "Lifecycle management"],
    href: "/architecture#cross-chain",
  },
  {
    n: "04",
    title: "Smart Contract Architecture",
    line: "Contract systems whose authority, upgrades and failure paths are designed up front.",
    items: ["Access control", "Upgradeability", "Governance", "Security", "Role separation", "Testing", "Deployment automation"],
    href: "/architecture#security",
  },
];

// Methodology shown at the top of the Architecture page.
export const methodology = [
  { step: "Requirements", note: "Business outcome, regulatory context, operators and users" },
  { step: "Trust Model", note: "Who is trusted for what — keys, oracles, bridges, custodians, admins" },
  { step: "Architecture", note: "Contract boundaries, token lifecycle, chains and upgrade model" },
  { step: "Smart Contracts", note: "Implementation against agreed interfaces and invariants" },
  { step: "Security Controls", note: "Role separation, privileged paths, pause and recovery" },
  { step: "Integration", note: "Backend, APIs, wallets, custody and compliance services" },
  { step: "Deployment", note: "Deterministic, scripted, verified on every network" },
  { step: "Operations", note: "Runbooks, monitoring and controlled change after launch" },
];

export const principles = [
  {
    n: "01",
    title: "A token is a system, not a contract.",
    body: "Token architecture includes issuance, governance, custody, integrations, deployment, monitoring and operational controls.",
  },
  {
    n: "02",
    title: "Cross-chain architecture is trust architecture.",
    body: "Every bridge introduces assumptions about messaging, liquidity, supply reconciliation and failure recovery.",
  },
  {
    n: "03",
    title: "Compliance belongs in architecture.",
    body: "For regulated assets, identity, claims, transfer restrictions and administrative controls must exist at protocol level.",
  },
  {
    n: "04",
    title: "Security begins before the audit.",
    body: "Threat modelling, role separation, privileged operations, upgrade controls and emergency mechanisms are architecture decisions.",
  },
  {
    n: "05",
    title: "Deployment is part of system design.",
    body: "Deterministic deployment, environment consistency, verification and operational runbooks are production requirements.",
  },
  {
    n: "06",
    title: "Technology follows system constraints.",
    body: "EVM, Solana, LayerZero and ERC-3643 are implementation choices — architecture begins with system requirements.",
  },
];

// Security framework: how I reason about controls. Not a claim that every
// control was implemented in a specific engagement.
export const securityFramework = [
  { group: "Authority", items: ["Access control", "Least privilege", "Role separation", "Multisig", "Timelocks", "Key management", "Custody"] },
  { group: "Runtime controls", items: ["Pause controls", "Circuit breakers", "Rate limits", "Supply invariants"] },
  { group: "External risk", items: ["Oracle risk", "Bridge risk", "Upgrade governance"] },
  { group: "Assurance", items: ["Testing", "Static analysis — Slither, Mythril, MythX", "Audit readiness", "Monitoring"] },
];

export const threatModel = [
  {
    threat: "Compromised privileged key",
    boundary: "Admin and issuer roles",
    control: "Role separation, multisig or custody-held roles",
    response: "Pause affected paths, rotate keys, reassign roles",
  },
  {
    threat: "Forged or faulty cross-chain message",
    boundary: "Bridge / messaging layer",
    control: "Explicit peers, verifier configuration, rate limits",
    response: "Halt the affected route, reconcile supply",
  },
  {
    threat: "Stale or manipulated price",
    boundary: "Oracle input",
    control: "Freshness checks, conservative collateral ratios",
    response: "Suspend risky actions until prices are trusted",
  },
  {
    threat: "Unsafe upgrade",
    boundary: "Upgrade authority",
    control: "Governed upgrades, review and timelock",
    response: "Delay window allows detection and rollback",
  },
];

export const crossChain = {
  diagram: [
    ["Ethereum", "Polygon", "Arbitrum", "Base", "Avalanche"],
    "Cross-chain Messaging / OFT",
    "Unified Token System",
    "Solana · chain-native SPL implementation",
  ] as (string | string[])[],
  label:
    "Reference cross-chain architecture: EVM networks connected through cross-chain messaging to one unified token system, with Solana as a chain-native implementation.",
  questions: [
    "Who attests that an event on the source chain happened — and what does the destination do if that attestation is wrong?",
    "Where does canonical supply live: burn-and-mint across peers, or lock-and-release behind an adapter?",
    "Which remote contracts may send messages, and how is that peer list governed?",
    "What stops a faulty route from draining value — rate limits, pause paths, reconciliation checks?",
  ],
};

export const deploymentFlow = [
  { step: "Environment configuration", note: "Per-network parameters kept out of init code" },
  { step: "Deterministic deployment", note: "CREATE2 for identical addresses across EVM networks" },
  { step: "Scripted rollout", note: "The same automated steps on every network" },
  { step: "Post-deploy validation", note: "Addresses, roles, peers and parameters checked" },
  { step: "Source verification", note: "Verified on each network's explorer" },
  { step: "Role handover", note: "Privileged roles moved to multisig or custody-held wallets" },
  { step: "Audit handoff & runbooks", note: "Scope, assumptions and operational procedures documented" },
];
