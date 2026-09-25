import type { Metadata } from "next";
import Link from "next/link";
import { Education, InfosysAward, NextLevel, Skills } from "@/components/Blocks";
import { ArrowRight, Download } from "@/components/Icons";
import { PageHero, Section } from "@/components/Section";
import { storyArc } from "@/content/leadership";
import { profile, training } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Senior blockchain engineer with architecture depth and SME-level technical leadership — DeFi, RWA, token infrastructure, cross-chain and blockchain-powered ecosystems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="An engineer who thinks about the whole system" lede={profile.about}>
        <div className="btn-row mt-40">
          <a className="btn btn-primary" href={profile.resume} download><Download /> Download Executive Resume</a>
          <Link className="btn" href="/leadership">Technical leadership</Link>
        </div>
      </PageHero>

      <Section id="facts" eyebrow="In brief" title="What I bring">
        <ul className="cred" style={{ marginTop: 0 }} aria-label="Key facts">
          {[
            ["15+ years", "IT experience"],
            ["7+ years", "Blockchain specialisation"],
            ["Hands-on", "Smart-contract engineering"],
            ["Architecture", "Protocol & system design"],
            ["Security", "Reviews · audit preparation"],
          ].map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}
        </ul>
        <div className="tags mt-24">
          {["Consulting", "Blockchain SME", "RWA", "DeFi", "Token infrastructure", "Cross-chain", "Metaverse"].map((t) => (
            <span key={t} className="tag tag-accent">{t}</span>
          ))}
        </div>
      </Section>

      <Section id="story" eyebrow="Profile" title="Building, then architecting, then leading" alt>
        <div className="split">
          <div className="stack-20 muted">
            <p>
              I started my career in 2008 as a software testing engineer at Infosys, working on CMMI Level 5 process
              implementation, metrics and user-acceptance testing. That grounding in quality — asking how a system
              fails before asking how it works — still shapes how I approach smart contracts.
            </p>
            <p>
              After IT and testing roles in Dubai, I specialised in blockchain through a PG Diploma at IIIT Bangalore
              and moved into Solidity development in 2020. From smart contracts I moved into DeFi and financial
              protocols, then into real-world-asset tokenization. At G Future Tech I led smart-contract architecture
              for financial and governance ecosystems — REAL Governance and USDAO, spanning crypto-backed and
              RWA-backed models. In parallel, at Maavatar, I was the Blockchain SME and a core technical contributor
              to the blockchain foundation of a metaverse ecosystem.
            </p>
            <p>
              Today, as a Blockchain Consultant at AppMindsGlobal, I work on multi-chain token infrastructure across
              EVM and Solana. Across all of it, I combine hands-on engineering with architecture, security, delivery
              ownership and SME-level technical guidance — leading technical discussions, supporting development
              teams and translating business requirements into production-oriented blockchain systems.
            </p>
          </div>
          <div className="stack-12">
            <span className="eyebrow">The story this portfolio tells</span>
            <ol className="arc mt-8">
              {storyArc.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Capabilities" title="Technical depth, grouped">
        <Skills />
      </Section>

      <Section id="next-level" eyebrow="Direction" title="Ready for the Next Level" alt>
        <NextLevel />
      </Section>

      <Section id="education" eyebrow="Education" title="Foundations & continuous learning">
        <Education />
        <div className="grid-2 mt-40">
          <InfosysAward />
          <div className="card stack-12">
            <h3>Training</h3>
            <ul className="bullets">
              {training.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
        <div className="section-foot">
          <Link className="text-link" href="/experience">Full professional experience <ArrowRight /></Link>
        </div>
      </Section>
    </>
  );
}
