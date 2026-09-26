import Link from "next/link";
import { ContactBlock } from "@/components/Blocks";
import { HeroVisual } from "@/components/HeroVisual";
import { CareerSnapshot, Principles, SelectedSystems, Specializations } from "@/components/HomeBlocks";
import { ArrowRight, GitHub, LinkedIn, Mail } from "@/components/Icons";
import { Section } from "@/components/Section";
import { profile } from "@/content/profile";
import { pageMeta } from "@/lib/meta";

export const metadata = {
  ...pageMeta(
    "Blockchain Architect · Web3 Technical Lead",
    "Blockchain Architect and Web3 Technical Lead designing secure RWA, DeFi and multi-chain token infrastructure — ERC-3643, smart contract architecture, EVM and Solana.",
    "/",
  ),
  title: { absolute: "Sunanda Vempati | Blockchain Architect · Web3 Technical Lead" },
};

// Home has one job: make a technical leader want to explore further.
// Detail lives on Architecture, Case Studies, Leadership and Experience.
export default function Home() {
  return (
    <>
      <div className="wrap">
        <header className="hero">
          <div>
            <div className="hero-name">SUNANDA VEMPATI</div>
            <div className="hero-roles hero-roles-lg">
              {profile.roles.map((r) => <span key={r}>{r}</span>)}
            </div>
            <div className="hero-specialisms">{profile.specialization.join(" • ")}</div>
            <h1>
              I design <em>secure blockchain systems</em> — not merely smart contracts.
            </h1>
            <p className="lede">{profile.headline}</p>
            <div className="btn-row">
              <Link href="/architecture" className="btn btn-primary btn-lg">Explore architecture <ArrowRight /></Link>
              <Link href="/case-studies" className="btn btn-lg">View case studies</Link>
            </div>
            <ul className="cred" aria-label="Credentials at a glance">
              {profile.credibility.map((c) => (
                <li key={c.k}><b>{c.k}</b><span>{c.v}</span></li>
              ))}
            </ul>
            <div className="hero-links">
              <Link className="text-link" href="/contact"><Mail /> Contact</Link>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a>
              <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer"><GitHub /> GitHub</a>
            </div>
          </div>
          <HeroVisual />
        </header>
      </div>

      <Section
        id="specialization"
        index="01"
        eyebrow="Architecture specialization"
        title="Four domains, one discipline"
        lede="Each domain has its own trust model and failure modes. The architecture work is making them explicit."
      >
        <Specializations />
      </Section>

      <Section
        id="systems"
        index="02"
        eyebrow="Selected systems"
        title="Architecture I've delivered"
        lede="The problem, my role, the decision that shaped the system, and how it reached delivery."
        alt
      >
        <SelectedSystems />
        <div className="section-foot">
          <Link className="text-link" href="/case-studies">All case studies, including REAL Governance <ArrowRight /></Link>
        </div>
      </Section>

      <Section id="principles" index="03" eyebrow="Engineering principles" title="How I approach blockchain systems">
        <Principles />
        <div className="section-foot">
          <Link className="text-link" href="/architecture#principles">The reasoning behind each principle <ArrowRight /></Link>
        </div>
      </Section>

      <Section id="career" index="04" eyebrow="Career & leadership" title="From quality engineering to blockchain architecture" alt>
        <CareerSnapshot />
      </Section>

      <section className="section" id="contact" aria-label="Contact">
        <div className="wrap">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
