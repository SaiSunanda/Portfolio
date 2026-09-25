import Link from "next/link";
import {
  Blueprints,
  CareerJourney,
  ContactBlock,
  DecisionCards,
  ExperienceSummary,
  FeaturedSystems,
  LeadershipFlow,
  LeadershipPillars,
  QuantumTeaser,
  RecruiterSnapshot,
  SecurityByDesign,
  WhatIBuild,
} from "@/components/Blocks";
import { HeroVisual } from "@/components/HeroVisual";
import { ArrowRight, Download, GitHub, LinkedIn, Mail } from "@/components/Icons";
import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

// Homepage order follows the recruiter's questions: who is she → what does she
// build → proof → snapshot → can she architect / lead → how experienced → contact.
export default function Home() {
  return (
    <>
      <div className="wrap">
        <header className="hero">
          <div>
            <div className="hero-name">SUNANDA VEMPATI</div>
            <div className="hero-roles">
              {profile.roles.map((r) => <span key={r}>{r}</span>)}
            </div>
            <h1>
              Designing <em>secure blockchain systems</em> across RWA, DeFi, token infrastructure, cross-chain
              protocols and blockchain-powered ecosystems.
            </h1>
            <div className="btn-row">
              <Link href="#featured" className="btn btn-primary btn-lg">View case studies <ArrowRight /></Link>
              <a href={profile.resume} className="btn btn-lg" download>Download resume <Download /></a>
              <Link href="#contact" className="btn btn-ghost btn-lg">Let&rsquo;s connect <ArrowRight /></Link>
            </div>
            <ul className="cred" aria-label="Credentials at a glance">
              {profile.credibility.map((c) => (
                <li key={c.v}><b>{c.k}</b><span>{c.v}</span></li>
              ))}
            </ul>
            <div className="hero-links">
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a>
              <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer"><GitHub /> GitHub</a>
              <a className="text-link" href={`mailto:${profile.email}`}><Mail /> Email</a>
            </div>
          </div>
          <HeroVisual />
        </header>
      </div>

      <Section
        id="build"
        index="01"
        eyebrow="What I build"
        title="Four architectural domains"
        lede="The systems I design and build sit underneath financial, asset-tokenization and digital-world ecosystems."
      >
        <WhatIBuild />
      </Section>

      <Section
        id="featured"
        index="02"
        eyebrow="Featured systems"
        title="Complex systems, real contributions"
        lede="Selected blockchain systems I've contributed to across financial infrastructure, RWA, multi-chain architecture and blockchain-powered ecosystems."
        alt
      >
        <FeaturedSystems />
        <div className="section-foot">
          <Link className="text-link" href="/case-studies">All case studies, including RealProton <ArrowRight /></Link>
        </div>
      </Section>

      <Section id="snapshot" index="03" eyebrow="Recruiter snapshot" title="At a glance">
        <RecruiterSnapshot />
      </Section>

      <Section
        id="lead"
        index="04"
        eyebrow="How I lead"
        title="Technical leadership, from requirement to production"
        lede="Hands-on engineering combined with architecture, security, delivery and SME-level guidance — every stage below is one I work in directly."
        alt
      >
        <LeadershipFlow />
        <div className="mt-40">
          <LeadershipPillars compact />
        </div>
        <div className="section-foot">
          <Link className="text-link" href="/leadership">Technical leadership in depth <ArrowRight /></Link>
        </div>
      </Section>

      <Section
        id="architecture"
        index="05"
        eyebrow="Architecture thinking"
        title="The shape of the systems I design"
        lede="Projects show what was built. These blueprints show how I think about each kind of system."
      >
        <Blueprints compact />
        <div className="section-foot">
          <Link className="text-link" href="/architecture">Open the architecture portfolio <ArrowRight /></Link>
        </div>
      </Section>

      <Section
        id="security"
        index="06"
        eyebrow="Security by design"
        title="Security across the whole lifecycle"
        lede="From threat modeling during architecture to verification after deployment — not only at the audit."
        alt
      >
        <SecurityByDesign />
      </Section>

      <Section
        id="decisions"
        index="07"
        eyebrow="Architecture decisions"
        title="The reasoning behind the choices"
        lede="Concise examples of architectural reasoning from real engagements."
      >
        <DecisionCards />
        <div className="section-foot">
          <Link className="text-link" href="/architecture#decisions">Full decision records and trade-offs <ArrowRight /></Link>
        </div>
      </Section>

      <Section
        id="journey"
        index="08"
        eyebrow="Career evolution"
        title="From engineering to blockchain architecture"
        lede="Each stage widened the scope: quality discipline from testing, operational realism from IT, then blockchain depth across DeFi, RWA, metaverse and multi-chain systems."
        alt
      >
        <CareerJourney />
      </Section>

      <Section
        id="experience"
        index="09"
        eyebrow="Experience"
        title="Recent roles"
        lede="Financial blockchain infrastructure at G Future Tech, a blockchain-powered metaverse at Maavatar, and multi-chain token infrastructure at AppMindsGlobal."
      >
        <ExperienceSummary />
        <div className="section-foot">
          <Link className="text-link" href="/experience">Full experience, including earlier IT career <ArrowRight /></Link>
        </div>
      </Section>

      <section className="section section-alt" id="quantum" aria-label="Beyond blockchain: Quantum Computing">
        <div className="wrap">
          <QuantumTeaser />
        </div>
      </section>

      <section className="section" id="contact" aria-label="Contact">
        <div className="wrap">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
