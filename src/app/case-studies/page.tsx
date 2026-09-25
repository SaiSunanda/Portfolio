import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/Blocks";
import { PageHero, Section } from "@/components/Section";
import { caseStudies, otherProjects } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Blockchain architecture case studies: RBC / FRK multi-chain token infrastructure, REAL Governance, USDAO crypto-backed and RWA-backed financial infrastructure, the Maavatar blockchain-backed metaverse, and RealProton RWA tokenization.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Architecture records"
        lede="Every major project uses the same fourteen-part structure — from context and architecture through security, deployment, my contribution and my SME / leadership contribution to architecture takeaways — with a clear line between what I did and what the broader team delivered."
      />
      <div className="wrap" style={{ paddingBottom: 64 }}>
        <h2 className="sr-only">Case studies</h2>
        <div className="grid-2">
          {caseStudies.map((cs, i) => (
            <div key={cs.slug} style={i === 0 ? { gridColumn: "1 / -1" } : undefined}>
              <CaseStudyCard cs={cs} />
            </div>
          ))}
        </div>
      </div>

      <Section
        id="more"
        eyebrow="More work"
        title="Additional blockchain projects"
        lede="Earlier projects that built the foundations — standards, DeFi mechanics, security testing and deployment automation."
        alt
      >
        <div className="grid-3">
          {otherProjects.map((p) => (
            <article key={p.title} className="card stack-12">
              <h3 style={{ fontSize: 17 }}>{p.title}</h3>
              <p className="muted" style={{ fontSize: 14.5 }}>{p.body}</p>
              <div className="tags" style={{ marginTop: "auto" }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
