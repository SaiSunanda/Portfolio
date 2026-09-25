import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LayerDiagram } from "@/components/Diagram";
import { ArrowLeft, ArrowRight, Download, Mail } from "@/components/Icons";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { profile } from "@/content/profile";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — ${cs.subtitle}`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: { title: `${cs.title} — ${cs.subtitle} | Sunanda Vempati`, description: cs.summary, type: "article" },
  };
}

const SECTIONS = [
  ["context", "Context"],
  ["problem", "Problem"],
  ["architecture", "Architecture"],
  ["decisions", "Design Decisions"],
  ["contracts", "Smart Contracts"],
  ["security", "Security"],
  ["integration", "Integrations"],
  ["deployment", "Deployment"],
  ["challenges", "Challenges"],
  ["solution", "Solution"],
  ["contribution", "My Contribution"],
  ["sme", "SME / Technical Leadership"],
  ["technologies", "Technologies"],
  ["takeaways", "Architecture Takeaways"],
] as const;

type SectionId = (typeof SECTIONS)[number][0];

function Block({ id, children }: { id: SectionId; children: ReactNode }) {
  const i = SECTIONS.findIndex(([s]) => s === id);
  return (
    <section id={id} className="cs-section" aria-labelledby={`${id}-h`}>
      <span className="cs-num">{String(i + 1).padStart(2, "0")} — {SECTIONS[i][1].toUpperCase()}</span>
      <h2 id={`${id}-h`}>{SECTIONS[i][1]}</h2>
      {children}
    </section>
  );
}

const List = ({ items }: { items: string[] }) => (
  <ul className="bullets">{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article>
      <div className="wrap page-hero">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/case-studies">Case studies</Link>
          <span aria-hidden>/</span>
          <span aria-current="page">{cs.title}</span>
        </nav>
        <div className="cs-hero">
          <div>
            <span className="eyebrow">{cs.org} · {cs.orgNote}</span>
            <h1>{cs.title}</h1>
            <p className="role-title mt-16" style={{ fontSize: 18 }}>{cs.subtitle}</p>
            <p className="lede">{cs.summary}</p>
            <div className="tags mt-24">
              {cs.tags.map((t) => <span key={t} className="tag tag-accent">{t}</span>)}
            </div>
          </div>
          <LayerDiagram layers={cs.diagram} label={cs.diagramLabel} />
        </div>
      </div>

      <div className="section" style={{ paddingTop: 56 }}>
        <div className="wrap cs-layout">
          <ol className="cs-toc" aria-label="Case study sections">
            {SECTIONS.map(([id, label], i) => (
              <li key={id}><a href={`#${id}`}>{String(i + 1).padStart(2, "0")} {label}</a></li>
            ))}
          </ol>

          <div>
            <Block id="context"><p>{cs.context}</p></Block>
            <Block id="problem"><p>{cs.problem}</p></Block>
            <Block id="architecture">
              <p>{cs.architecture}</p>
              <div className="dive-grid">
                {cs.deepDives.map((d) => (
                  <div key={d.title} className="dive">
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                  </div>
                ))}
              </div>
            </Block>
            <Block id="decisions">
              <div style={{ overflowX: "auto" }}>
                <table className="table">
                  <thead><tr><th scope="col">Decision</th><th scope="col">Why</th></tr></thead>
                  <tbody>
                    {cs.decisions.map((d) => (
                      <tr key={d.decision}><td>{d.decision}</td><td>{d.why}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
            <Block id="contracts">
              <div style={{ overflowX: "auto" }}>
                <table className="table">
                  <thead><tr><th scope="col">Component</th><th scope="col">Responsibility</th></tr></thead>
                  <tbody>
                    {cs.contracts.map((c) => (
                      <tr key={c.name}><td>{c.name}</td><td>{c.role}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
            <Block id="security"><List items={cs.security} /></Block>
            <Block id="integration"><List items={cs.integration} /></Block>
            <Block id="deployment"><List items={cs.deployment} /></Block>
            <Block id="challenges"><List items={cs.challenges} /></Block>
            <Block id="solution"><p className="quote">{cs.solution}</p></Block>
            <Block id="contribution">
              <div className="contrib">
                <div className="card mine">
                  <h3>What I personally worked on</h3>
                  <List items={cs.contribution} />
                </div>
                <div className="card theirs">
                  <h3>Delivered by the broader project / team</h3>
                  <List items={cs.broaderScope} />
                </div>
              </div>
            </Block>
            <Block id="sme"><List items={cs.sme} /></Block>
            <Block id="technologies">
              <div className="tech-groups">
                {cs.technologies.map((g) => (
                  <div key={g.group}>
                    <span className="evidence-label">{g.group}</span>
                    <div className="tags">
                      {g.items.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="takeaways">
              <div className="card takeaways">
                <ol>
                  {cs.takeaways.map((t) => <li key={t}>{t}</li>)}
                </ol>
              </div>
            </Block>

            <aside className="cs-cta" aria-label="Get in touch">
              <h2>Building something similar?</h2>
              <p className="muted">
                I&rsquo;m open to blockchain architecture, smart-contract architecture, technical leadership and Web3
                consulting opportunities.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Opportunity — re: ${cs.title}`)}`}>
                  <Mail /> Discuss an opportunity
                </a>
                <a className="btn" href={profile.resume} download><Download /> Download resume</a>
              </div>
            </aside>

            <nav className="pager mt-40" aria-label="More case studies">
              <Link href={`/case-studies/${prev.slug}`} className="card card-link stack-12">
                <span className="applied"><ArrowLeft width={12} height={12} /> Previous</span>
                <b>{prev.title}</b>
              </Link>
              <Link href={`/case-studies/${next.slug}`} className="card card-link stack-12">
                <span className="applied">Next <ArrowRight width={12} height={12} /></span>
                <b>{next.title}</b>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
}
