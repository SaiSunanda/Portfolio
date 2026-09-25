import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { blueprints, decisions, domains, securityLifecycle, securityPractices, securityTools } from "@/content/architecture";
import type { CaseStudy } from "@/content/caseStudies";
import { blockchainRoles, currentRole, infosysAward, journey } from "@/content/experience";
import { caseStudies } from "@/content/caseStudies";
import { leadershipFormula, leadershipModel, pillars } from "@/content/leadership";
import { currentLearning, education, profile, skills, snapshot } from "@/content/profile";
import { LayerDiagram, Flow } from "./Diagram";
import { ArrowRight, Award, Download, GitHub, Handshake, Layers, LinkedIn, Mail, Route, Shield, Users } from "./Icons";

const pillarIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  architecture: Layers,
  delivery: Route,
  enablement: Users,
  stakeholder: Handshake,
};

export function LeadershipPillars({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid-4">
      {pillars.map((p) => {
        const Icon = pillarIcons[p.id];
        return (
          <article key={p.id} className="card pillar reveal">
            <span className="pillar-icon"><Icon /></span>
            <h3>{p.title}</h3>
            <p>{compact ? p.short : p.lede}</p>
            {!compact && (
              <ul className="checklist">
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}
            <div className="evidence">
              <span className="evidence-label">Evidence</span>
              {p.evidence.map((e) => <p key={e}>{e}</p>)}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function LeadershipFlow() {
  return <Flow steps={leadershipModel.map((s) => s.step)} label="How I lead: from business requirement to continuous improvement" />;
}

export function LeadershipProcess() {
  return (
    <ol className="process" aria-label="Technical leadership model, from business requirement to continuous improvement">
      {leadershipModel.map((s) => (
        <li key={s.step}>
          <div>
            <div className="step-title">{s.step}</div>
            <div className="step-note">{s.note}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CurrentRoleFeature() {
  const rbc = caseStudies.find((c) => c.slug === "rbc-frk")!;
  return (
    <article className="role-feature">
      <div className="role-main">
        <span className="status">Current role</span>
        <div>
          <h3>{currentRole.company}</h3>
          <div className="role-title mt-8">{currentRole.title} · {currentRole.when}</div>
        </div>
        <p className="muted">{currentRole.summary}</p>
        <ul className="bullets">
          {currentRole.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <div className="tags">
          {currentRole.focus.map((f) => <span key={f} className="tag">{f}</span>)}
        </div>
      </div>
      <div className="role-case">
        <span className="eyebrow">Featured AppMindsGlobal work</span>
        <div>
          <h4>{rbc.title}</h4>
          <div className="role-title mt-8">{rbc.subtitle}</div>
        </div>
        <LayerDiagram layers={rbc.diagram} label={rbc.diagramLabel} />
        <div>
          <Link href={`/case-studies/${rbc.slug}`} className="btn btn-primary">
            Explore architecture <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

// Side-by-side contrast of the two most different blockchain domains in the career.
export function DomainContrast() {
  const pick = (id: string) => blockchainRoles.find((r) => r.id === id)!;
  const domains = [
    { role: pick("gft-lead"), kicker: "Financial infrastructure", flow: ["Crypto-backed", "RWA-backed", "DeFi", "Governance", "Protocol"] },
    { role: pick("maavatar"), kicker: "Blockchain-backed metaverse", flow: ["Digital identity", "NFTs", "Ownership", "Web3", "Ecosystem"] },
  ];
  return (
    <div className="grid-2">
      {domains.map(({ role, kicker, flow }) => (
        <article key={role.id} className="card contrast">
          <span className="kicker">{kicker}</span>
          <div>
            <h3>{role.company}</h3>
            <div className="role-title mt-8">{role.title} · {role.when}</div>
          </div>
          <Flow steps={flow} label={`${role.company} focus`} />
          <p className="muted">{role.summary}</p>
          {role.sme && (
            <div className="sme-box">
              <span className="evidence-label">{role.sme.title}</span>
              <ul className="checklist">
                {role.sme.items.slice(0, 3).map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          )}
          <div className="job-links">
            {role.caseStudies?.map((slug) => {
              const cs = caseStudies.find((c) => c.slug === slug)!;
              return (
                <Link key={slug} className="text-link" href={`/case-studies/${slug}`}>
                  {cs.title} <ArrowRight />
                </Link>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link href={`/case-studies/${cs.slug}`} className="card card-link cs-card">
      <span className="org">{cs.org.toUpperCase()} · {cs.orgNote}</span>
      <h3>{cs.title}</h3>
      <div className="sub">{cs.subtitle}</div>
      <p>{cs.summary}</p>
      <div className="tags">
        {cs.tags.slice(0, 5).map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <span className="more">Explore architecture <ArrowRight width={14} height={14} /></span>
    </Link>
  );
}

export function Blueprints({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid-2">
      {blueprints.map((b) => (
        <article key={b.id} id={b.id} className={`card blueprint${b.wide ? " blueprint-wide" : ""}`}>
          <div className="blueprint-head">
            <h3>{b.title}</h3>
            <span className="kicker">{b.kicker}</span>
          </div>
          <Flow steps={b.flow} label={`${b.title} flow`} />
          <p>{b.intent}</p>
          {!compact && (
            <>
              <ul className="checklist">
                {b.concerns.map((c) => <li key={c}>{c}</li>)}
              </ul>
              {b.seenIn && (
                <Link className="text-link" href={b.seenIn.href}>
                  Applied in {b.seenIn.label} <ArrowRight />
                </Link>
              )}
            </>
          )}
        </article>
      ))}
    </div>
  );
}

export function Decisions({ limit }: { limit?: number }) {
  const list = limit ? decisions.slice(0, limit) : decisions;
  return (
    <div className="grid-2">
      {list.map((d, i) => (
        <article key={d.id} id={`decision-${d.id}`} className="card decision">
          <span className="q">ADR-{String(i + 1).padStart(2, "0")}</span>
          <h3>{d.question}</h3>
          <p className="muted">{d.context}</p>
          <ul className="bullets">
            {d.considerations.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <div className="tradeoff"><b>Trade-off</b>{d.tradeoff}</div>
          <span className="applied">Applied in: {d.appliedIn}</span>
        </article>
      ))}
    </div>
  );
}

export function SecurityByDesign() {
  return (
    <div className="stack-20">
      <ol className="lifecycle" aria-label="Security lifecycle">
        {securityLifecycle.map((s, i) => (
          <li key={s} className={i === 1 || i === 5 || i === 8 ? "shield" : undefined}>{s}</li>
        ))}
      </ol>
      <div className="grid-2 mt-24">
        <div className="card stack-20">
          <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Shield width={20} height={20} style={{ color: "var(--success)" }} /> Tooling
          </h3>
          {securityTools.map((t) => (
            <div key={t.name} className="tool"><b>{t.name}</b><span>{t.role}</span></div>
          ))}
        </div>
        <div className="card stack-20">
          <h3>Practice</h3>
          <ul className="checklist">
            {securityPractices.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <p className="muted" style={{ fontSize: 14 }}>
            Security is treated as a property of the whole lifecycle — from threat modeling during architecture to
            verification after deployment — rather than a single audit at the end.
          </p>
        </div>
      </div>
    </div>
  );
}

export function NextLevel() {
  return (
    <div className="split">
      <div className="stack-20">
        <p className="quote">
          My career has evolved from software testing and IT engineering into blockchain development, smart-contract
          architecture, consulting and technical leadership. My current focus is combining hands-on engineering depth
          with architecture, delivery ownership, mentoring and stakeholder collaboration.
        </p>
        <p className="muted">This is the trajectory I am building toward:</p>
        <div className="targets">
          {["Blockchain Architect", "Technical Lead", "Engineering Manager", "Solutions Architect", "Web3 Engineering Leadership"].map((t) => (
            <span key={t} className="tag tag-accent">{t}</span>
          ))}
        </div>
      </div>
      <div className="formula" role="img" aria-label="Engineering plus architecture plus security plus delivery plus mentoring plus stakeholder management equals technical leadership">
        {leadershipFormula.map((t, i) => (
          <span key={t} style={{ display: "contents" }}>
            {i > 0 && <span className="op" aria-hidden>+</span>}
            <span className="term" aria-hidden>{t}</span>
          </span>
        ))}
        <span className="op" aria-hidden>↓</span>
        <span className="result" aria-hidden>TECHNICAL LEADERSHIP</span>
      </div>
    </div>
  );
}

export function CareerJourney() {
  return (
    <>
      <ol className="journey" style={{ ["--n" as string]: journey.length }} aria-label="Career progression from 2008 to today and next">
        {journey.map((j) => (
          <li key={j.label} data-status={j.status}>
            <span className="j-year">{j.year}</span>
            <span className="j-dot" aria-hidden />
            <span className="j-label">{j.label}</span>
            <span className="j-note">{j.note}</span>
          </li>
        ))}
      </ol>
      <div className="legend" aria-hidden>
        <span><i style={{ background: "var(--primary)" }} /> Completed</span>
        <span><i style={{ background: "var(--success)", borderColor: "var(--success)" }} /> Now</span>
        <span><i style={{ borderStyle: "dashed", borderColor: "var(--cyan)" }} /> Direction</span>
      </div>
    </>
  );
}

export function QuantumPath() {
  const steps = [
    { n: "01", t: "Classical Computing", s: "Testing, IT systems, software engineering" },
    { n: "02", t: "Blockchain", s: "Smart contracts, tokens, protocols" },
    { n: "03", t: "Distributed Systems", s: "Consensus, cross-chain, trust models" },
    { n: "04", t: "Quantum Computing", s: "Currently studying at IISc" },
  ];
  return (
    <ol className="q-path" aria-label="Learning path from classical computing to quantum computing">
      {steps.map((s) => (
        <li key={s.n}>
          <span className="n">{s.n}</span>
          <b>{s.t}</b>
          <span>{s.s}</span>
        </li>
      ))}
    </ol>
  );
}

export function Education() {
  return (
    <div className="grid-4">
      {education.map((e) => (
        <div key={e.title} className="card edu">
          <span className="when">{e.when}</span>
          <h3>{e.title}</h3>
          <p>{e.org}</p>
        </div>
      ))}
      <div className="card edu edu-current">
        <span className="when" style={{ color: "var(--cyan)" }}>Current learning · {currentLearning.status}</span>
        <h3>{currentLearning.title}</h3>
        <p>{currentLearning.org}</p>
      </div>
    </div>
  );
}

export function InfosysAward() {
  return (
    <div className="card award">
      <span className="award-icon"><Award /></span>
      <div className="stack-12">
        <h3>{infosysAward.title}</h3>
        <span className="applied">{infosysAward.org} · {infosysAward.when}</span>
        <p className="muted">
          Recognised for contributions to {infosysAward.areas.slice(0, -1).join(", ").toLowerCase()} and{" "}
          {infosysAward.areas.at(-1)!.toLowerCase()}. An early signal that knowledge sharing and enabling others have
          been part of my work long before blockchain.
        </p>
      </div>
    </div>
  );
}

export function ContactBlock({ as = "h2" }: { as?: "h1" | "h2" }) {
  const Heading = as;
  const subject = encodeURIComponent("Opportunity — blockchain architecture");
  return (
    <div className="contact-hero">
      <span className="eyebrow">Contact</span>
      <Heading className="contact-title mt-16">Let&rsquo;s build the next protocol.</Heading>
      <p className="lede mt-24">
        Open to opportunities in blockchain architecture, smart-contract architecture, technical leadership, Web3
        consulting, RWA, DeFi and blockchain engineering.
      </p>
      <div className="btn-row mt-40">
        <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}?subject=${subject}`}>
          <Mail /> Discuss an opportunity
        </a>
        <a className="btn btn-lg" href={profile.resume} download><Download /> Download resume</a>
      </div>
      <div className="contact-list">
        <a className="contact-item" href={`mailto:${profile.email}`}>
          <span className="k"><Mail width={14} height={14} /> Email me</span>
          <span className="v">{profile.email}</span>
        </a>
        <a className="contact-item" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <span className="k"><LinkedIn width={14} height={14} /> LinkedIn</span>
          <span className="v">{profile.linkedinLabel}</span>
        </a>
        <a className="contact-item" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span className="k"><GitHub width={14} height={14} /> GitHub</span>
          <span className="v">{profile.githubLabel}</span>
        </a>
      </div>
    </div>
  );
}

/* ---------- Recruiter-focused homepage blocks ---------- */

export function WhatIBuild() {
  return (
    <div className="grid-2 build-grid">
      {domains.map((d) => (
        <article key={d.n} className="card build reveal">
          <div className="build-head">
            <span className="build-n">{d.n}</span>
            <h3>{d.title}</h3>
          </div>
          <Flow steps={d.flow} label={`${d.title} flow`} />
          <p>{d.body}</p>
          <Link className="text-link" href={d.proof.href}>
            Proof: {d.proof.label} <ArrowRight />
          </Link>
        </article>
      ))}
    </div>
  );
}

const cs = (slug: string) => caseStudies.find((c) => c.slug === slug)!;
const role = (id: string) => blockchainRoles.find((r) => r.id === id)!;

export function FeaturedSystems() {
  const rbc = cs("rbc-frk");
  const usdao = cs("usdao");
  const gov = cs("real-governance");
  const maav = cs("maavatar");
  const items = [
    {
      n: "01",
      badge: "AppMindsGlobal",
      role: currentRole.title,
      title: rbc.title,
      subtitle: rbc.subtitle,
      body: rbc.summary,
      groups: [
        {
          label: "Highlights",
          items: [
            "Token deployment",
            "CREATE2 deterministic deployments",
            "Multi-chain EVM infrastructure",
            "LayerZero OFT-oriented cross-chain architecture",
            "Deployment automation",
            "Contract verification",
            "Audit handoff",
            "EVM / Solana-oriented design",
          ],
        },
      ],
      diagram: rbc,
      links: [{ href: `/case-studies/${rbc.slug}`, label: "Explore architecture" }],
    },
    {
      n: "02",
      badge: "G Future Tech",
      role: role("gft-lead").title,
      title: "REAL Governance + USDAO",
      subtitle: "Crypto-backed + RWA-backed Financial Infrastructure",
      body:
        "Financial and governance blockchain infrastructure spanning crypto-backed and real-world-asset-backed models — from stablecoin and lending protocols to on-chain governance.",
      groups: [
        {
          label: "USDAO",
          items: [
            "Crypto-backed and RWA-backed models",
            "Stablecoin infrastructure and collateralization",
            "Lending, borrowing and liquidity",
            "Oracle integration",
            "Liquidation and recovery mechanisms",
          ],
        },
        {
          label: "REAL Governance",
          items: [
            "Governance infrastructure and mechanisms",
            "Protocol logic and on-chain execution",
            "Smart contracts, testing and security",
            "Deployment",
          ],
        },
      ],
      diagram: usdao,
      links: [
        { href: `/case-studies/${usdao.slug}`, label: "Explore USDAO architecture" },
        { href: `/case-studies/${gov.slug}`, label: "Explore REAL Governance" },
      ],
    },
    {
      n: "03",
      badge: "Maavatar",
      role: role("maavatar").title,
      title: "Maavatar",
      subtitle: "Blockchain-powered Metaverse Ecosystem",
      body:
        "A blockchain-backed metaverse where blockchain infrastructure supported digital identity, assets, ownership and on-chain interactions — contributed to as Blockchain SME and smart-contract developer.",
      groups: [
        {
          label: "Highlights",
          items: [
            "Blockchain SME and technical direction",
            "Solidity, ERC-1155 and dynamic NFTs",
            "Mutable metadata and evolving digital identity",
            "NFT ownership, tiers and digital assets",
            "Wallet, Web3 and application integration",
            "DAO / DeFi interoperability",
          ],
        },
      ],
      diagram: maav,
      links: [{ href: `/case-studies/${maav.slug}`, label: "Explore architecture" }],
    },
  ];

  return (
    <div className="featured">
      {items.map((f) => (
        <article key={f.n} className="feature reveal">
          <div className="feature-body">
            <div className="feature-meta">
              <span className="feature-n">{f.n}</span>
              <span className="badge">{f.badge}</span>
              <span className="feature-role">{f.role}</span>
            </div>
            <div>
              <h3>{f.title}</h3>
              <div className="role-title mt-8">{f.subtitle}</div>
            </div>
            <p className="muted">{f.body}</p>
            <div className={f.groups.length > 1 ? "feature-groups two" : "feature-groups"}>
              {f.groups.map((g) => (
                <div key={g.label}>
                  <span className="evidence-label">{g.label}</span>
                  <ul className="checklist mt-8">
                    {g.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="btn-row">
              {f.links.map((l, i) => (
                <Link key={l.href} href={l.href} className={`btn${i === 0 ? " btn-primary" : ""}`}>
                  {l.label} <ArrowRight />
                </Link>
              ))}
            </div>
          </div>
          <div className="feature-visual">
            <LayerDiagram layers={f.diagram.diagram} label={f.diagram.diagramLabel} />
          </div>
        </article>
      ))}
    </div>
  );
}

export function RecruiterSnapshot() {
  return (
    <div className="snapshot reveal">
      <dl className="snapshot-grid">
        {snapshot.map((r) => (
          <div key={r.k}>
            <dt>{r.k}</dt>
            <dd>{r.v}</dd>
          </div>
        ))}
      </dl>
      <div className="snapshot-cta">
        <a className="btn btn-primary" href={profile.resume} download><Download /> Download resume</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a>
        <a className="btn" href={`mailto:${profile.email}`}><Mail /> Email</a>
      </div>
    </div>
  );
}

export function DecisionCards() {
  return (
    <div className="grid-3">
      {decisions.filter((d) => d.featured).map((d) => (
        <Link key={d.id} href={`/architecture#decision-${d.id}`} className="card card-link decision-card reveal">
          <h3>{d.question}</h3>
          <p>{d.summary}</p>
          <span className="applied">{d.appliedIn}</span>
        </Link>
      ))}
    </div>
  );
}

export function ExperienceSummary() {
  const roles = [
    {
      company: currentRole.company,
      title: currentRole.title,
      when: currentRole.when,
      current: true,
      story: "Multi-chain token infrastructure · technical consulting",
      tags: ["RWA", "CREATE2", "Bridging", "Vesting", "Staking", "EVM", "Solana"],
      links: currentRole.caseStudies ?? [],
    },
    ...["gft-lead", "maavatar", "brane"].map((id) => {
      const r = role(id);
      return {
        company: r.company,
        title: r.title,
        when: r.when,
        current: false,
        story: r.story ?? "Enterprise smart contracts · automation · security reviews · mentoring",
        tags: (r.tags ?? []).slice(0, 7),
        links: r.caseStudies ?? [],
      };
    }),
  ];
  return (
    <ol className="xp">
      {roles.map((r) => (
        <li key={r.company + r.title} className="xp-item reveal">
          <span className="xp-dot" data-current={r.current} aria-hidden />
          <div className="card xp-card">
            <div className="xp-head">
              <div>
                <h3>{r.company}</h3>
                <div className="role-title mt-8">{r.title}</div>
              </div>
              <span className="xp-when">{r.when}{r.current && <span className="status">Current</span>}</span>
            </div>
            <p className="xp-story">{r.story}</p>
            <div className="tags">
              {r.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            {r.links.length > 0 && (
              <div className="job-links">
                {r.links.map((slug) => (
                  <Link key={slug} className="text-link" href={`/case-studies/${slug}`}>
                    {cs(slug).title} <ArrowRight />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Skills() {
  return (
    <dl className="skills">
      {skills.map((g) => (
        <div key={g.group} className="skill-row">
          <dt>{g.group}</dt>
          <dd>{g.items.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}

export function QuantumTeaser() {
  return (
    <div className="quantum reveal">
      <div className="stack-12">
        <span className="eyebrow">Beyond blockchain</span>
        <h2 className="quantum-title">Exploring Quantum Computing</h2>
        <p className="muted">
          Currently studying Quantum Computing through the Indian Institute of Science (IISc), Bengaluru — following the
          next shift in computing and the cryptography blockchains depend on.
        </p>
        <div className="tags">
          {["Continuous learning", "Systems thinking", "Future technology"].map((t) => (
            <span key={t} className="tag tag-accent">{t}</span>
          ))}
        </div>
        <Link className="text-link mt-8" href="/quantum">Why it matters to a blockchain architect <ArrowRight /></Link>
      </div>
      <QuantumPath />
    </div>
  );
}
