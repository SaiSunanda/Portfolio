import type { Metadata } from "next";
import { Blueprints, Decisions, SecurityByDesign } from "@/components/Blocks";
import { PageHero, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Blockchain architecture blueprints and decisions: token infrastructure, RWA compliance, DeFi lending, cross-chain messaging, CREATE2, ERC-3643, LayerZero, Fireblocks, EVM and Solana.",
  alternates: { canonical: "/architecture" },
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture"
        title="Architecture thinking"
        lede="Projects demonstrate what was built. This page demonstrates how I think: the recurring system shapes I design, the concerns each one must address, and the decisions behind them."
      />

      <Section id="blueprints" eyebrow="Blueprints" title="Five system shapes I design">
        <Blueprints />
      </Section>

      <Section
        id="decisions"
        eyebrow="Architecture decisions"
        title="Architecture considerations I work with"
        lede="Framed as lightweight architecture decision records: the context, what I weigh, and the trade-off I accept."
        alt
      >
        <Decisions />
      </Section>

      <Section
        id="security"
        eyebrow="Security leadership"
        title="Security by Design"
        lede="Security should appear throughout the development lifecycle."
      >
        <SecurityByDesign />
      </Section>
    </>
  );
}
