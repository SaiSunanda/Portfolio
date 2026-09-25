// Case studies share one template (01–14) so every project reads as an
// architecture record. Only source-supported scope is claimed: no metrics,
// team sizes or production figures.

export type Layer = string | string[];

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  org: string;
  orgNote: string;
  tags: string[];
  summary: string;
  diagram: Layer[];
  diagramLabel: string;
  context: string;
  problem: string;
  architecture: string;
  deepDives: { title: string; body: string }[];
  decisions: { decision: string; why: string }[];
  contracts: { name: string; role: string }[];
  security: string[];
  integration: string[];
  deployment: string[];
  challenges: string[];
  solution: string;
  contribution: string[];
  broaderScope: string[];
  sme: string[];
  technologies: { group: string; items: string[] }[];
  takeaways: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rbc-frk",
    title: "RBC / FRK",
    subtitle: "Multi-chain Token Infrastructure",
    org: "AppMindsGlobal",
    orgNote: "Blockchain Consultant",
    tags: ["Token Infrastructure", "CREATE2", "Multi-chain EVM", "LayerZero OFT", "Deployment Automation", "Solana"],
    summary:
      "Token infrastructure deployed and validated across multiple EVM networks with deterministic CREATE2 addressing, a LayerZero OFT-oriented cross-chain model, deployment automation, contract verification and audit handoff — designed with Solana in scope.",
    diagram: [
      "Token · ERC-20 / OFT",
      ["CREATE2 Deployment", "Deployment Automation"],
      ["Bridge", "LayerZero OFT-oriented Messaging"],
      ["Multi-chain EVM Networks", "Solana"],
      ["Verification", "Audit Handoff"],
    ],
    diagramLabel:
      "RBC / FRK architecture: an ERC-20 / OFT token deployed deterministically with CREATE2 and automated scripts, connected by a LayerZero OFT-oriented bridge across multiple EVM networks and Solana, followed by verification and audit handoff.",
    context:
      "RBC and FRK are token programmes I work on as a Blockchain Consultant at AppMindsGlobal. Both tokens needed to exist on more than one network, with a release process that could be repeated, verified and handed to auditors with confidence.",
    problem:
      "Launching a token on several chains usually produces different addresses per network, independently minted supplies and hand-run deployments. That makes integrations fragile, supply hard to reason about and audits harder to scope. The challenge was to make a multi-chain token behave like one system.",
    architecture:
      "The token is deployed through a deterministic CREATE2 pattern so each EVM deployment resolves to the same address. Cross-chain movement follows a LayerZero OFT-oriented model: each deployment is peered with its counterparts, and transfers debit on the source chain and credit on the destination, keeping one logical supply. Deployment and verification are scripted per network so every chain is configured the same way.",
    deepDives: [
      {
        title: "Deterministic deployment",
        body: "CREATE2 derives the address from the deployer, a salt and the init-code hash. Keeping those identical across chains yields identical token addresses — so wallets, explorers and integrators recognise the token everywhere by one address.",
      },
      {
        title: "Cross-chain supply",
        body: "An OFT-style token treats each chain's contract as part of one supply. Bridging is a message between trusted peers rather than a wrapped IOU, so supply accounting stays consistent.",
      },
      {
        title: "Deployment automation",
        body: "Scripted, per-network deployment removes manual variance between chains and makes redeployments reproducible.",
      },
      {
        title: "EVM and Solana",
        body: "EVM networks share the CREATE2 model; Solana does not. On Solana, tokens follow the SPL model with program-derived accounts, so the architecture keeps one product specification with chain-appropriate implementations.",
      },
    ],
    decisions: [
      { decision: "Deterministic CREATE2 deployment", why: "Same address on every EVM chain simplifies integration, verification and trust." },
      { decision: "OFT-oriented bridging over a custom bridge", why: "Reuses established cross-chain messaging instead of building and securing a bespoke bridge." },
      { decision: "Scripted, per-network deployment", why: "Removes manual variance between chains and makes redeployments reproducible." },
      { decision: "Verification as part of release", why: "A deployment is not done until the source is verified on each network." },
    ],
    contracts: [
      { name: "ERC-20 token", role: "Core fungible token logic and supply" },
      { name: "OFT / bridge layer", role: "Cross-chain debit / credit between peered deployments" },
      { name: "CREATE2 deployer", role: "Deterministic, repeatable contract addresses" },
      { name: "Deployment scripts", role: "Network configuration, peering and verification" },
    ],
    security: [
      "Review of privileged roles — ownership, peer configuration and any mint / pause authority.",
      "Validation that only configured remote peers can deliver cross-chain messages.",
      "Per-network checks of deployed addresses and configuration.",
      "Audit handoff package: scope, contracts, deployment process and assumptions.",
    ],
    integration: [
      "One token address shared with wallets, explorers and integrators across EVM networks.",
      "Cross-chain peer configuration aligned across every supported network.",
    ],
    deployment: [
      "Deterministic CREATE2 deployment on each EVM network.",
      "Deployment automation repeating the same steps and configuration per chain.",
      "Post-deployment validation of addresses, peers and parameters.",
      "Source verification on each network's block explorer.",
    ],
    challenges: [
      "Keeping init code identical across chains while still allowing per-chain configuration.",
      "Making peer configuration complete and correct on every network before transfers are enabled.",
      "Designing across EVM and Solana, whose account and deployment models differ fundamentally.",
    ],
    solution:
      "A token system designed to be deployed, not merely written: deterministic addresses, one cross-chain supply model, automated deployment and verification, and a clean audit handoff.",
    contribution: [
      "Deployed and validated the token infrastructure across multiple EVM networks using CREATE2-based deterministic addressing.",
      "Worked on the ERC-20, bridge and LayerZero OFT-oriented architecture.",
      "Built and ran deployment automation and contract verification.",
      "Prepared and supported the audit handoff.",
    ],
    broaderScope: [
      "Token economics and commercial decisions — client",
      "Independent security audit — external auditors",
    ],
    sme: [
      "Architecture decisions on deterministic deployment and cross-chain supply",
      "Technical consulting and requirements clarification with the client",
      "Deployment planning and sequencing across networks",
      "Security considerations for privileged roles and peer configuration",
      "Communication with audit stakeholders through the handoff",
    ],
    technologies: [
      { group: "Contracts", items: ["Solidity", "ERC-20", "LayerZero OFT-oriented"] },
      { group: "Deployment", items: ["CREATE2", "Deployment automation", "Contract verification"] },
      { group: "Tooling", items: ["Hardhat", "Ethers.js"] },
      { group: "Networks", items: ["Multi-chain EVM", "Solana"] },
    ],
    takeaways: [
      "Design the deployment, not just the contract.",
      "Determinism makes systems auditable and integrations boring — in a good way.",
      "Cross-chain security is configuration security: peers and verifiers are part of the attack surface.",
    ],
  },
  {
    slug: "real-governance",
    title: "REAL Governance",
    subtitle: "Blockchain Governance & Protocol Infrastructure",
    org: "G Future Tech",
    orgNote: "SME / Lead Blockchain Developer",
    tags: ["Governance", "Protocol Logic", "On-chain Execution", "Token Infrastructure", "Solidity", "Security"],
    summary:
      "Contributed to the development of the REAL Governance ecosystem — governance mechanisms, protocol logic, on-chain execution and the token / protocol infrastructure they operate on, taken through testing, security review and deployment.",
    diagram: [
      "Governance Mechanisms",
      "Protocol Logic",
      ["On-chain Execution", "Token / Protocol Infrastructure"],
      ["Testing & Security Review", "Deployment & Integration"],
    ],
    diagramLabel:
      "REAL Governance architecture: governance mechanisms drive protocol logic, which is applied through on-chain execution over token and protocol infrastructure, wrapped by testing, security review, deployment and integration.",
    context:
      "At G Future Tech, my work spanned blockchain-based financial and governance ecosystems. REAL Governance is the governance side of that work: an ecosystem where decisions are expressed and carried out on-chain.",
    problem:
      "Governance only works if decisions translate reliably into on-chain changes. The protocol logic had to express governance mechanisms precisely, apply outcomes safely through on-chain execution, and fit the token and protocol infrastructure around it — without leaving unreviewed privileged paths that bypass governance.",
    architecture:
      "The system separates concerns into layers: governance mechanisms capture and resolve decisions; protocol logic holds the rules being governed; on-chain execution applies approved outcomes; and token / protocol infrastructure provides the assets and state governance acts on. Testing, security review and deployment wrap every layer.",
    deepDives: [
      {
        title: "Governance mechanisms",
        body: "Contract logic that defines how decisions are made and resolved. Correctness here is about rules that behave identically for every participant and every edge case.",
      },
      {
        title: "On-chain execution",
        body: "The path from an approved decision to a state change. It is the most security-sensitive part of any governance system, because it is where authority becomes action.",
      },
      {
        title: "Protocol logic",
        body: "The parameters and behaviours governance controls. Keeping protocol logic separate from governance logic makes each easier to reason about, test and review.",
      },
      {
        title: "Integration requirements",
        body: "Governance contracts are consumed by applications and services. Contract interfaces were shaped with integration requirements in mind rather than retrofitted afterwards.",
      },
    ],
    decisions: [
      { decision: "Separate governance from protocol logic", why: "Each layer can be tested and reviewed on its own terms." },
      { decision: "Make privileged paths explicit", why: "Any action that bypasses governance must be visible, justified and reviewed." },
      { decision: "Test full governance flows, not just functions", why: "Governance bugs usually live in sequences of steps, not in single calls." },
      { decision: "Design interfaces for integration early", why: "Applications depend on predictable, well-defined contract interfaces." },
    ],
    contracts: [
      { name: "Governance contracts", role: "Governance mechanisms and decision logic" },
      { name: "Protocol contracts", role: "Rules and parameters the ecosystem governs" },
      { name: "Execution path", role: "Applying approved outcomes on-chain" },
      { name: "Token / protocol infrastructure", role: "Assets and state that governance operates on" },
    ],
    security: [
      "Access-control and privileged-function review across governance and protocol contracts.",
      "Testing of governance and execution flows, including edge cases.",
      "Static analysis and security review before deployment.",
      "Deployment verification.",
    ],
    integration: [
      "Integration requirements worked through with product and engineering stakeholders.",
      "Contract interfaces for application and backend integration.",
    ],
    deployment: ["Deployment planning.", "Deployment and contract verification."],
    challenges: [
      "Making governance outcomes deterministic and safe to execute on-chain.",
      "Keeping operations practical without introducing unreviewed bypasses of governance.",
      "Testing multi-step flows whose correctness depends on ordering and state.",
    ],
    solution:
      "A layered governance and protocol infrastructure where decisions, rules and execution are distinct, reviewable components — developed, tested, security-reviewed and deployed as one system.",
    contribution: [
      "Contributed to the development of the REAL Governance ecosystem as SME / Lead Blockchain Developer.",
      "Designed and developed smart contracts for governance mechanisms, protocol logic and on-chain execution.",
      "Worked on the token / protocol infrastructure the governance layer operates on.",
      "Covered testing, security review and deployment.",
      "Worked through integration requirements with stakeholders.",
    ],
    broaderScope: [
      "Governance model and product direction — G Future Tech product and business stakeholders",
      "Applications built on top of the contracts — wider engineering teams",
    ],
    sme: [
      "Smart-contract architecture and protocol design discussions",
      "Translating governance and product requirements into contract logic",
      "Technical decision support and problem solving",
      "Security considerations raised during design",
      "Deployment planning",
    ],
    technologies: [
      { group: "Contracts", items: ["Solidity", "OpenZeppelin"] },
      { group: "Tooling", items: ["Hardhat", "Ethers.js"] },
      { group: "Security", items: ["Slither", "Security review"] },
      { group: "Networks", items: ["EVM"] },
    ],
    takeaways: [
      "Governance is only as trustworthy as its execution path.",
      "Separate the rules from the rule-making.",
      "Test sequences, not just functions.",
    ],
  },
  {
    slug: "usdao",
    title: "USDAO",
    subtitle: "Crypto-backed & RWA-backed Financial Infrastructure",
    org: "G Future Tech",
    orgNote: "SME / Lead Blockchain Developer",
    tags: ["Stablecoin", "Crypto-backed", "RWA-backed", "DeFi", "Lending", "Governance", "Liquidation"],
    summary:
      "A blockchain-based financial ecosystem spanning crypto-backed and real-world-asset-backed models — stablecoin infrastructure, collateralization, lending and borrowing (HydraLend), liquidity, governance, liquidation, oracles and on-chain operational controls.",
    diagram: [
      ["Crypto-backed Collateral", "RWA-backed Collateral"],
      "Collateralization & Risk Controls",
      "Stablecoin Infrastructure",
      ["Lending", "Borrowing", "Liquidity"],
      ["Oracles", "Liquidation", "Governance"],
    ],
    diagramLabel:
      "USDAO architecture: crypto-backed and RWA-backed collateral feed collateralization and risk controls, which back stablecoin infrastructure; lending, borrowing and liquidity sit on top, supported by oracles, liquidation and governance.",
    context:
      "USDAO is a blockchain-based financial ecosystem built around a USD-pegged stablecoin, designed for payment- and settlement-oriented use. HydraLend is its lending and borrowing layer. Crucially, the ecosystem spans two collateral worlds: crypto-backed and real-world-asset-backed.",
    problem:
      "Crypto collateral is liquid but volatile; real-world assets such as real estate are more stable in value but illiquid and slow to price. A financial system that supports both needs one coherent architecture with different risk treatment for each — and it has to stay solvent under stress.",
    architecture:
      "Collateral from either model enters through collateralization and risk controls, which back stablecoin issuance under an over-collateralization model. Lending, borrowing and liquidity build on the stablecoin. Oracles price collateral, collateral-ratio controls decide when positions are at risk, liquidation and recovery restore solvency, and governance and on-chain operational controls manage parameters.",
    deepDives: [
      { title: "Two collateral models", body: "Crypto-backed and RWA-backed collateral live in one protocol but carry separate risk parameters, reflecting very different liquidity and pricing behaviour." },
      { title: "Collateralization & risk", body: "Over-collateralization and collateral-ratio controls absorb price movement; RWA collateral needs more conservative treatment than liquid crypto assets." },
      { title: "Stablecoin infrastructure", body: "A USD-pegged token issued against collateral, with reserve monitoring supporting its payment and settlement role." },
      { title: "Lending, borrowing & liquidity", body: "HydraLend lets borrowers draw against collateral and lenders supply liquidity, with collateral ratios defining safe limits." },
      { title: "Liquidation & recovery", body: "Liquidation closes or rebalances under-collateralized positions; recovery mechanisms cover cases where liquidation alone is not enough." },
      { title: "Oracle integration", body: "Every solvency decision depends on prices, so oracle choice, freshness and fallback behaviour are first-class design topics." },
      { title: "Governance & operational controls", body: "Risk parameters and operational actions are managed through governance and on-chain operational controls rather than ad-hoc admin changes." },
      { title: "Cross-chain considerations", body: "Cross-chain infrastructure was explored so the stablecoin could serve users on more than one network." },
    ],
    decisions: [
      { decision: "One architecture, two collateral models", why: "Crypto-backed and RWA-backed assets share infrastructure but not risk parameters." },
      { decision: "Over-collateralization", why: "The most robust defence against collateral price movement." },
      { decision: "Liquidation plus recovery paths", why: "Solvency needs a fast mechanism and a plan for when it is not enough." },
      { decision: "Governed parameters and operational controls", why: "Risk settings change; the process for changing them must be controlled and visible." },
      { decision: "Compliance-ready standards (ERC-3643) for RWA", why: "Real-world-asset value brings eligibility and transfer requirements." },
    ],
    contracts: [
      { name: "Stablecoin", role: "USD-pegged token issued against collateral" },
      { name: "Collateral manager", role: "Crypto-backed and RWA-backed deposits, ratios and accounting" },
      { name: "Lending / borrowing pools", role: "Liquidity supply and debt positions (HydraLend)" },
      { name: "Liquidation module", role: "Threshold checks, liquidation and recovery" },
      { name: "Oracle adapter", role: "Price inputs with freshness checks" },
      { name: "Governance & controls", role: "Parameter management and on-chain operational controls" },
    ],
    security: [
      "Oracle manipulation and staleness treated as primary risks.",
      "Liquidation incentives reviewed for edge cases in volatile markets.",
      "Privileged parameter changes identified and routed through controls.",
      "Static analysis and security review of contracts through design iterations.",
    ],
    integration: ["Oracle integration for collateral pricing.", "Reserve monitoring and on-chain operational controls.", "Cross-chain infrastructure exploration."],
    deployment: ["Contracts developed, tested and deployed on EVM networks through successive design iterations.", "Deployment planning and contract verification."],
    challenges: [
      "Treating volatile crypto collateral and illiquid RWA collateral fairly within one protocol.",
      "Pricing real-world-asset-linked collateral reliably on-chain.",
      "Setting collateral ratios that are safe without making borrowing useless.",
    ],
    solution:
      "A layered financial architecture where collateral models, pricing, lending, liquidation, reserves and governance are explicit, separately reviewable components — covering both crypto-backed and RWA-backed finance.",
    contribution: [
      "Designed and refined the architecture of the USDAO stablecoin and related DeFi infrastructure across crypto-backed and RWA-backed models.",
      "Worked on over-collateralized lending and borrowing, collateral-ratio controls, liquidation and recovery mechanisms, and multi-collateral protocol design.",
      "Worked on oracle integration, reserve monitoring, governance and on-chain operational controls; explored cross-chain infrastructure.",
      "Integrated compliance-ready token standards (ERC-3643) for RWA-backed components.",
      "Smart-contract development, security review and deployment.",
    ],
    broaderScope: [
      "Asset origination, valuation and legal structuring — business and legal stakeholders",
      "Economic parameter sign-off and treasury policy — business stakeholders",
    ],
    sme: [
      "Architecture discussions on collateral, liquidation and reserves",
      "Framing risk trade-offs for business and product stakeholders",
      "Requirements clarification for crypto-backed vs RWA-backed behaviour",
      "Security considerations and deployment planning",
    ],
    technologies: [
      { group: "Contracts", items: ["Solidity", "OpenZeppelin", "ERC-3643"] },
      { group: "DeFi", items: ["Stablecoin", "Lending / borrowing", "Liquidation", "Oracle integration"] },
      { group: "Tooling", items: ["Hardhat"] },
      { group: "Networks", items: ["EVM"] },
    ],
    takeaways: [
      "A stablecoin ecosystem is a risk-management system with tokens attached.",
      "Different collateral deserves different rules inside the same architecture.",
      "Design for the bad day: recovery paths matter as much as the happy path.",
    ],
  },
  {
    slug: "maavatar",
    title: "Maavatar / MAAVI",
    subtitle: "Blockchain-backed Metaverse Ecosystem",
    org: "Maavatar",
    orgNote: "Smart Contract Manager / Blockchain SME (Consultant)",
    tags: ["Metaverse", "Blockchain SME", "ERC-1155", "Dynamic NFTs", "Digital Identity", "Web3"],
    summary:
      "Blockchain SME and core technical contributor to a blockchain-backed metaverse ecosystem — building the blockchain foundation beneath digital identity, dynamic NFTs, digital assets, ownership and on-chain interaction.",
    diagram: [
      "Digital Identity",
      "Wallet",
      ["Digital Assets", "NFTs"],
      "Ownership",
      "Smart Contracts",
      "On-chain Interaction",
      "Metaverse Ecosystem",
    ],
    diagramLabel:
      "Maavatar architecture: digital identity connects through a wallet to digital assets and NFTs, whose ownership is enforced by smart contracts, enabling on-chain interaction across the metaverse ecosystem.",
    context:
      "Maavatar is a metaverse ecosystem in which blockchain is the foundation rather than a bolt-on NFT feature. AI-driven avatars represent users, and identity, assets and ownership all live on-chain.",
    problem:
      "A metaverse needs identities that evolve, assets that users truly own, and interactions that other components can trust. Translating that product vision into blockchain components — without making ownership fragile or metadata untrustworthy — required both engineering and technical direction.",
    architecture:
      "Users connect a wallet to an on-chain digital identity. Identities, NFTs and digital assets are represented as ERC-1155 tokens with tiers and mutable metadata, and smart contracts enforce ownership and govern how identities evolve. On-chain interaction lets NFT, DeFi and DAO components across the ecosystem build on the same foundation.",
    deepDives: [
      { title: "Blockchain-backed metaverse", body: "Blockchain underpins the ecosystem: identity, assets, ownership and interaction are on-chain primitives that every other component relies on." },
      { title: "Digital identity & dynamic NFTs", body: "Avatars are dynamic NFTs whose metadata evolves under controlled rules, so identity can change while ownership and token ID stay stable." },
      { title: "Ownership & digital assets", body: "Ownership models define what users hold — identities, tiered NFTs and ecosystem assets — and what each token represents." },
      { title: "Wallet & Web3 integration", body: "Wallet connectivity and blockchain / application integration connect the metaverse experience to on-chain state." },
      { title: "DAO / DeFi interoperability", body: "Identity and asset tokens are designed to be recognised by DAO and DeFi components rather than living in a silo." },
    ],
    decisions: [
      { decision: "ERC-1155 over ERC-721", why: "Identities, tiers and assets as multiple token classes in one contract, with efficient batch operations." },
      { decision: "Controlled metadata mutation", why: "Evolution must be permissioned, or the meaning of an identity token cannot be trusted." },
      { decision: "Explicit ownership models", why: "Every asset type needs a clear definition of what owning it means." },
      { decision: "Interoperability as a design goal", why: "An identity or asset is only valuable if other components can read it." },
    ],
    contracts: [
      { name: "ERC-1155 identity & asset contracts", role: "Identities, NFT tiers and digital assets" },
      { name: "Metadata / evolution logic", role: "Controlled updates to evolving identities" },
      { name: "Ownership logic", role: "What each token represents and who controls it" },
      { name: "Integration interfaces", role: "Wallet, application, DAO and DeFi interaction" },
    ],
    security: [
      "Access control on metadata updates and evolution triggers.",
      "Contract testing across identity, NFT and asset flows.",
      "Security analysis of interacting components.",
      "Deployment and post-deployment checks.",
    ],
    integration: [
      "Wallet connectivity for ownership and interaction.",
      "Blockchain / application integration with the metaverse experience.",
      "DAO and DeFi interoperability.",
    ],
    deployment: ["Deployment planning with product and engineering stakeholders.", "Contract deployment."],
    challenges: [
      "Allowing identities to evolve without undermining ownership or authenticity.",
      "Translating a broad product vision into concrete blockchain components.",
      "Evolving the blockchain architecture as ecosystem requirements changed.",
    ],
    solution:
      "A blockchain foundation for the metaverse: evolving ERC-1155 identities, explicit ownership models for digital assets, and integration paths that let the wider ecosystem build on the same on-chain primitives.",
    contribution: [
      "Designed and developed Solidity smart contracts, including ERC-1155 dynamic NFTs with mutable metadata, NFT tiers and evolving digital identities.",
      "Worked on digital-asset representation and NFT ownership models.",
      "Supported wallet integration, Web3 and blockchain / application integration, and DAO / DeFi interoperability.",
      "Covered contract testing, security analysis and deployment.",
    ],
    broaderScope: [
      "Metaverse experience, AI avatar generation and models — Maavatar product and AI teams",
      "Front-end and application development — Maavatar engineering teams",
    ],
    sme: [
      "Acted as the Blockchain SME: technical direction on architecture and smart-contract design",
      "Helped translate the metaverse product vision into blockchain components",
      "Designed token / NFT mechanisms and defined ownership models",
      "Solved blockchain-specific problems and supported development teams",
      "Contributed to architecture decisions and implementation approaches as requirements evolved",
    ],
    technologies: [
      { group: "Contracts", items: ["Solidity", "ERC-1155", "OpenZeppelin"] },
      { group: "Web3", items: ["MetaMask", "Wallet integration"] },
      { group: "Tooling", items: ["Hardhat"] },
      { group: "Networks", items: ["EVM"] },
    ],
    takeaways: [
      "In a blockchain-backed metaverse, ownership is the product.",
      "Dynamic NFTs are an access-control problem first.",
      "An SME's job is translation: product vision into primitives engineers can build on.",
    ],
  },
  {
    slug: "realproton",
    title: "RealProton",
    subtitle: "RWA Tokenization & Compliance Infrastructure",
    org: "G Future Tech",
    orgNote: "SME / Lead Blockchain Developer",
    tags: ["RWA", "ERC-3643", "Real Estate", "Compliance", "Fireblocks", "Identity"],
    summary:
      "An ERC-3643-oriented real-estate tokenization platform with identity, claim topics, registry, compliance and controlled transfers — operated through a Fireblocks-based multisignature wallet architecture.",
    diagram: [
      "Real-World Asset",
      "RWA Tokenization",
      ["Identity", "Registry", "Compliance"],
      "ERC-3643 Token",
      "Controlled Transfer",
      "Fireblocks",
    ],
    diagramLabel:
      "RealProton architecture: a real-world asset is tokenized; identity, registry and compliance modules gate an ERC-3643 token; transfers are controlled and operated through Fireblocks.",
    context:
      "RealProton brings real-estate-linked assets on-chain. Unlike open DeFi tokens, these assets carry investor eligibility, jurisdictional and operational rules that must hold on every transfer.",
    problem:
      "A standard ERC-20 cannot express who is allowed to hold an asset, which jurisdictions it may move between, when it is locked, or how an issuer recovers a lost wallet. Those rules had to be enforced on-chain while staying operable by the issuer's teams.",
    architecture:
      "The token follows the ERC-3643 model: every holder is tied to an on-chain identity; required claims are defined by claim topics and trusted issuers; an identity registry answers 'is this wallet verified?'; and a modular compliance contract answers 'is this transfer allowed?'. Privileged operations run through agent roles, operated from a Fireblocks vault structure with multisignature approvals.",
    deepDives: [
      {
        title: "ERC-3643",
        body: "ERC-3643 (T-REX) defines permissioned tokens whose transfers succeed only when both parties are eligible and compliance rules pass. It separates identity, eligibility and rules into modules, so policy can evolve without redeploying the token.",
      },
      {
        title: "Identity & claim topics",
        body: "Each investor wallet maps to an on-chain identity holding claims issued by trusted issuers. Claim topics define which attestations are required — the token never stores personal data, only verifiable claims.",
      },
      {
        title: "Compliance & controlled transfers",
        body: "Token classes and jurisdictional transfer restrictions are enforced through whitelisting, identity validation and locking rules. Agent permissions support administrative transfer operations that regulated assets require.",
      },
      {
        title: "Fireblocks wallet infrastructure",
        body: "Operational wallets are separated by responsibility — treasury, transfer vault, issuer and legal — with multisignature approval flows. Privileged contract roles are held by policy-controlled vaults rather than individual keys.",
      },
    ],
    decisions: [
      { decision: "ERC-3643 over a custom whitelist token", why: "An established standard for permissioned assets, with identity and compliance separated into auditable modules." },
      { decision: "Modular compliance", why: "Jurisdictional and lock-up rules change; the token should not need to." },
      { decision: "Fireblocks vault separation", why: "Maps real operational responsibilities to distinct, policy-controlled wallets." },
      { decision: "Multisignature for privileged actions", why: "No single person can mint, force-transfer or reconfigure compliance alone." },
    ],
    contracts: [
      { name: "ERC-3643 token", role: "Permissioned transfers, token classes, locking" },
      { name: "Identity registry", role: "Maps wallets to verified on-chain identities" },
      { name: "Claim topics & trusted issuers", role: "Defines required attestations and who may issue them" },
      { name: "Compliance module", role: "Jurisdictional and transfer-rule enforcement" },
      { name: "Agent roles", role: "Administrative transfers, freezes and recovery" },
    ],
    security: [
      "Reviewed agent and administrative permissions — the most powerful and most sensitive surface.",
      "Participated in test-coverage reviews ahead of audit.",
      "Prepared bug summaries and supported remediation and redeployment.",
      "Verified redeployed contracts and configuration.",
    ],
    integration: [
      "Fireblocks-based treasury, transfer-vault, issuer and legal wallet flows.",
      "Contracts connected to backend operational APIs and user workflows.",
      "Coordination with compliance teams on transfer-rule requirements.",
    ],
    deployment: [
      "Avalanche-based deployment activities.",
      "Redeployment and verification following audit feedback.",
      "Role assignment to custody-controlled wallets after deployment.",
    ],
    challenges: [
      "Expressing jurisdictional and token-class rules as deterministic on-chain checks.",
      "Balancing strong agent powers (needed for regulated assets) with tight control over who can use them.",
      "Keeping contract roles, custody vaults and operational procedures aligned.",
    ],
    solution:
      "A compliance-ready tokenization stack: identity-gated ERC-3643 tokens, modular transfer rules, and privileged operations executed through a multisignature Fireblocks wallet architecture — prepared for audit and deployed with verification.",
    contribution: [
      "Worked on identity, claim-topic, registry, compliance and controlled-transfer components.",
      "Supported token classes and jurisdictional restrictions: whitelisting, identity validation, locking rules and agent permissions.",
      "Contributed to the Fireblocks wallet architecture — treasury, transfer-vault, issuer, legal and multisignature flows.",
      "Participated in audit preparation, test-coverage reviews, bug-summary reporting, redeployment, verification and Avalanche deployment.",
    ],
    broaderScope: [
      "Legal structuring and regulatory interpretation — client and legal advisers",
      "KYC provider and investor onboarding operations — client",
      "Independent audit — external auditors",
    ],
    sme: [
      "Collaboration with backend, wallet, compliance and product teams",
      "Requirements clarification: translating compliance rules into contract logic",
      "Audit readiness: coverage reviews and issue summaries",
      "Deployment and redeployment coordination",
    ],
    technologies: [
      { group: "Contracts", items: ["Solidity", "ERC-3643", "OpenZeppelin"] },
      { group: "Custody", items: ["Fireblocks", "Multisignature"] },
      { group: "Tooling & security", items: ["Hardhat", "Slither"] },
      { group: "Networks", items: ["Avalanche"] },
    ],
    takeaways: [
      "In RWA, the compliance model is the product.",
      "Privileged roles need a custody design, not just an onlyOwner modifier.",
      "Audit readiness is a deliverable — coverage, scope and known issues, documented.",
    ],
  },
];

export const otherProjects = [
  {
    title: "Decentralized Rights Management",
    body: "Transferable rights and time-bound NFT rentals with ERC-5218 and ERC-4907 — leasing, revocation, IPFS metadata and security controls.",
    tags: ["ERC-5218", "ERC-4907", "IPFS"],
  },
  {
    title: "Ethereum NFT Marketplace",
    body: "ERC-721 minting, listing, fixed-price and auction sales, royalties, wallet integration and anti-reentrancy testing.",
    tags: ["ERC-721", "Auctions", "Royalties"],
  },
  {
    title: "ETH-Backed Stablecoin with Governance",
    body: "Over-collateralised stablecoin with governance-controlled parameters, liquidation triggers and Chainlink oracle integration.",
    tags: ["Stablecoin", "Governance", "Chainlink"],
  },
  {
    title: "Stablecoin Staking Protocol",
    body: "Staking, proportional reward calculation, withdrawals and security-review workflows.",
    tags: ["Staking", "Rewards"],
  },
  {
    title: "JSON-to-Solidity Translator",
    body: "Python / Flask and Web3.py system converting JSON contract definitions into Solidity, with generated deployment scripts and interaction APIs.",
    tags: ["Python", "Web3.py", "Code generation"],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
