import {
  CrossChainArchitecture,
  DecisionRecords,
  DeploymentArchitecture,
  Methodology,
  SecurityArchitecture,
} from "@/components/ArchitectureBlocks";
import { Blueprints } from "@/components/Blocks";
import { Principles } from "@/components/HomeBlocks";
import { PageHero, Section } from "@/components/Section";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Blockchain Architecture — Trust Boundaries, ADRs & Security",
  "How Sunanda Vempati approaches blockchain architecture: trust models, RWA and DeFi domains, architecture decision records, security, cross-chain and deployment architecture.",
  "/architecture",
);

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture"
        title="How I think about blockchain architecture"
        lede="I approach blockchain architecture as system design across trust boundaries, not as isolated smart-contract development."
      >
        <nav className="page-toc" aria-label="On this page">
          {[
            ["#philosophy", "Philosophy"],
            ["#domains", "System domains"],
            ["#decisions", "Decision records"],
            ["#security", "Security"],
            ["#cross-chain", "Cross-chain"],
            ["#deployment", "Deployment"],
            ["#principles", "Principles"],
          ].map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </PageHero>

      <Section
        id="philosophy"
        index="01"
        eyebrow="Architecture philosophy"
        title="From requirements to operations"
        lede="Contracts are one layer of a blockchain system. The trust model is decided before them, and operations continue long after them."
      >
        <div className="split">
          <p className="quote sticky">
            Many blockchain incidents are not coding errors but unexamined trust assumptions — an admin key, an
            oracle, a bridge, a deployment step — that nobody designed for.
          </p>
          <Methodology label="Architecture methodology from requirements to operations" />
        </div>
      </Section>

      <Section
        id="domains"
        index="02"
        eyebrow="System domains"
        title="The shape of the systems I design"
        lede="Each domain has a characteristic flow and a characteristic set of questions it has to answer."
        alt
      >
        <Blueprints />
      </Section>

      <Section
        id="decisions"
        index="03"
        eyebrow="Architecture decision records"
        title="Decisions, with their trade-offs"
        lede="Context, decision, reasoning, trade-off and impact — the parts of a decision that matter after the code ships."
      >
        <DecisionRecords />
      </Section>

      <Section
        id="security"
        index="04"
        eyebrow="Security architecture"
        title="Security as architecture, not a checklist"
        lede="Each threat crosses a trust boundary. Controls sit on the boundary, and every control needs a failure response."
        alt
      >
        <SecurityArchitecture />
      </Section>

      <Section
        id="cross-chain"
        index="05"
        eyebrow="Cross-chain architecture"
        title="Cross-chain design is trust design"
        lede="A multi-chain token is one system with several execution environments — and every link between them is an assumption."
      >
        <CrossChainArchitecture />
      </Section>

      <Section
        id="deployment"
        index="06"
        eyebrow="Deployment architecture"
        title="Deployment is part of the system"
        lede="Smart contracts are expensive to change after release, so the release itself is designed."
        alt
      >
        <DeploymentArchitecture />
      </Section>

      <Section id="principles" index="07" eyebrow="Architecture principles" title="Principles behind the decisions">
        <Principles detailed />
      </Section>
    </>
  );
}
