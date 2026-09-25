// Systems map for the hero: one platform branching into the three domains,
// converging on multi-chain delivery. Pure SVG; motion is CSS/SMIL and is
// hidden under prefers-reduced-motion (see globals.css).

type Node = { id: string; label: string; x: number; y: number; w: number; tier: "root" | "domain" | "leaf" | "base" };

const NODES: Node[] = [
  { id: "root", label: "BLOCKCHAIN SYSTEMS", x: 240, y: 38, w: 230, tier: "root" },
  { id: "rwa", label: "RWA", x: 88, y: 128, w: 124, tier: "domain" },
  { id: "defi", label: "DEFI", x: 240, y: 128, w: 124, tier: "domain" },
  { id: "meta", label: "METAVERSE", x: 392, y: 128, w: 124, tier: "domain" },
  { id: "tok", label: "Tokenization", x: 88, y: 204, w: 124, tier: "leaf" },
  { id: "lend", label: "Lending", x: 240, y: 204, w: 124, tier: "leaf" },
  { id: "id", label: "Digital Identity", x: 392, y: 204, w: 124, tier: "leaf" },
  { id: "multi", label: "MULTI-CHAIN", x: 240, y: 302, w: 220, tier: "base" },
  { id: "chains", label: "EVM + SOLANA", x: 240, y: 382, w: 220, tier: "base" },
];

const H = { root: 44, domain: 38, leaf: 30, base: 42 } as const;

// Connectors: root → domains, domains → leaves, leaves → multi-chain → chains.
const PATHS = [
  "M240 60 V92 H88 V109",
  "M240 60 V109",
  "M240 60 V92 H392 V109",
  "M88 147 V189",
  "M240 147 V189",
  "M392 147 V189",
  "M88 219 V252 H240 V281",
  "M240 219 V281",
  "M392 219 V252 H240 V281",
  "M240 323 V361",
];

// Signal pulses travel full routes top to bottom.
const ROUTES = [
  { d: "M240 60 V92 H88 V252 H240 V361", dur: "6s", begin: "0s" },
  { d: "M240 60 V361", dur: "5s", begin: "2s" },
  { d: "M240 60 V92 H392 V252 H240 V361", dur: "6s", begin: "4s" },
];

export function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-bar" aria-hidden>
        <span>SYSTEM ARCHITECTURE</span>
        <span className="live">EVM · SOLANA</span>
      </div>
      <svg className="arch-svg" viewBox="0 0 480 410" role="img" aria-labelledby="hero-arch-title hero-arch-desc">
        <title id="hero-arch-title">Blockchain systems architecture</title>
        <desc id="hero-arch-desc">
          Blockchain systems branch into three domains — RWA with tokenization, DeFi with lending, and metaverse with
          digital identity — which converge on multi-chain infrastructure across EVM and Solana.
        </desc>

        {PATHS.map((d) => (
          <g key={d}>
            <path className="spine" d={d} fill="none" />
            <path className="spine-flow" d={d} fill="none" />
          </g>
        ))}

        {ROUTES.map((r) => (
          <circle key={r.d} className="pulse" r="3.2">
            <animateMotion dur={r.dur} begin={r.begin} repeatCount="indefinite" path={r.d} />
          </circle>
        ))}

        {NODES.map((n, i) => {
          const h = H[n.tier];
          return (
            <g key={n.id} className={`node node-${n.tier}`} style={{ ["--i" as string]: i }}>
              <rect x={n.x - n.w / 2} y={n.y - h / 2} width={n.w} height={h} rx="8" />
              <text x={n.x} y={n.y + (n.tier === "leaf" ? 3.8 : 4.5)} textAnchor="middle">{n.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
