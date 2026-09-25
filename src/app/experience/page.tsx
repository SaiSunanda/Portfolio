import type { Metadata } from "next";
import Link from "next/link";
import { CareerJourney, CurrentRoleFeature, DomainContrast, InfosysAward } from "@/components/Blocks";
import { ArrowRight, Chevron, Download } from "@/components/Icons";
import { PageHero, Section } from "@/components/Section";
import { caseStudies } from "@/content/caseStudies";
import { blockchainRoles, earlierRoles, type Role } from "@/content/experience";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience: AppMindsGlobal (multi-chain token infrastructure), G Future Tech (REAL Governance, USDAO, DeFi and RWA), Maavatar (blockchain-backed metaverse, Blockchain SME), Brane Enterprises and earlier IT roles.",
  alternates: { canonical: "/experience" },
};

function Job({ role }: { role: Role }) {
  return (
    <article className="job">
      <div className="job-when">
        {role.when}
        {role.location && <><br />{role.location}</>}
      </div>
      <div>
        <h3>{role.title}</h3>
        <div className="job-org">{role.company}</div>
        {role.story && <div className="job-story">{role.story}</div>}
        {role.summary && <p className="job-summary">{role.summary}</p>}
        <ul className="bullets">
          {role.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        {role.sme && (
          <div className="sme-box">
            <span className="evidence-label">{role.sme.title}</span>
            <ul className="checklist">
              {role.sme.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        )}
        {role.tags && (
          <div className="tags">
            {role.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
        {role.caseStudies && (
          <div className="job-links">
            {role.caseStudies.map((slug) => {
              const cs = caseStudies.find((c) => c.slug === slug)!;
              return (
                <Link key={slug} className="text-link" href={`/case-studies/${slug}`}>
                  Case study: {cs.title} <ArrowRight />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Professional experience"
        lede="15+ years in IT, including 7+ years specialising in blockchain — from first Solidity deployments to DeFi, crypto-backed and RWA-backed financial infrastructure, governance, a blockchain-backed metaverse and multi-chain token architecture."
      >
        <div className="btn-row mt-40">
          <a className="btn btn-primary" href={profile.resume} download><Download /> Download Executive Resume</a>
        </div>
      </PageHero>

      <Section id="current" eyebrow="Current" title="AppMindsGlobal">
        <CurrentRoleFeature />
      </Section>

      <Section
        id="breadth"
        eyebrow="Breadth"
        title="Two blockchain worlds"
        lede="G Future Tech: blockchain financial infrastructure. Maavatar: the blockchain foundation of a metaverse. Different domains, the same architecture discipline."
        alt
      >
        <DomainContrast />
      </Section>

      <Section id="blockchain" eyebrow="Blockchain career" title="Blockchain roles">
        <div className="timeline">
          {blockchainRoles.map((r) => <Job key={r.id} role={r} />)}
        </div>

        <details className="earlier">
          <summary>
            <span>
              Earlier IT Career <span className="muted" style={{ fontWeight: 400 }}>· 2008 – 2015 · Infosys, Diodes IT, Octagon, MAPS Investments</span>
            </span>
            <Chevron className="chev" width={20} height={20} />
          </summary>
          <div className="earlier-body">
            <div className="timeline">
              {earlierRoles.map((r) => <Job key={r.id} role={r} />)}
            </div>
          </div>
        </details>
      </Section>

      <Section
        id="award"
        eyebrow="Recognition"
        title="Leadership evidence from earlier in my career"
        lede="Presented factually: an individual performance award for contributions beyond my core testing role."
        alt
      >
        <InfosysAward />
      </Section>

      <Section id="journey" eyebrow="Career journey" title="From testing systems to architecting them">
        <CareerJourney />
      </Section>
    </>
  );
}
