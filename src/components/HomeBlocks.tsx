import Link from "next/link";
import { principles, specializations } from "@/content/architecture";
import { blockchainRoles, currentRole } from "@/content/experience";
import { selectedSystems } from "@/content/home";
import { profile } from "@/content/profile";
import { ArrowRight, Download } from "./Icons";

const roleTitle = (id: string) =>
  id === currentRole.id ? currentRole : blockchainRoles.find((r) => r.id === id)!;

export function Specializations() {
  return (
    <div className="grid-2">
      {specializations.map((d) => (
        <Link key={d.n} href={d.href} className="card card-link spec reveal">
          <div className="spec-head">
            <span className="build-n">{d.n}</span>
            <h3>{d.title}</h3>
          </div>
          <p>{d.line}</p>
          <ul className="spec-items" aria-label={`${d.title} concerns`}>
            {d.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </Link>
      ))}
    </div>
  );
}

export function SelectedSystems() {
  return (
    <div className="grid-2">
      {selectedSystems.map((s) => {
        const r = roleTitle(s.roleId);
        return (
          <article key={s.slug} className="card system reveal">
            <header className="system-head">
              <div>
                <span className="kicker">System</span>
                <h3>{s.title}</h3>
              </div>
              <div className="mini-flow" aria-hidden>
                {s.diagram.map((n, i) => (
                  <span key={n} className="mini-flow-item">
                    {i > 0 && <i className="mini-flow-link" />}
                    <span className="mini-flow-node">{n}</span>
                  </span>
                ))}
              </div>
            </header>
            <p className="system-lede">{s.system}</p>
            <dl className="system-facts">
              <div><dt>Architecture problem</dt><dd>{s.problem}</dd></div>
              <div><dt>My role</dt><dd>{r.title} · {r.company}</dd></div>
              <div><dt>Key decision</dt><dd>{s.decision}</dd></div>
              <div><dt>Delivery</dt><dd>{s.delivery}</dd></div>
            </dl>
            <Link className="btn system-cta" href={`/case-studies/${s.slug}`}>
              View architecture <ArrowRight />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export function Principles({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className={`principles${detailed ? " detailed" : ""}`}>
      {principles.map((p) => (
        <li key={p.n} className="reveal">
          <span className="principle-n">{p.n}</span>
          <div>
            <h3>{p.title}</h3>
            {detailed && <p>{p.body}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

const progression = ["Testing", "Engineering", "Blockchain", "DeFi", "RWA", "Multi-chain systems", "Architecture / Technical Leadership"];

export function CareerSnapshot() {
  const recent = [currentRole, ...blockchainRoles.filter((r) => ["gft-lead", "maavatar", "brane"].includes(r.id))];
  return (
    <div className="career-snap">
      <div className="stack-20">
        <ol className="progression" aria-label="Career progression">
          {progression.map((p, i) => (
            <li key={p} data-last={i === progression.length - 1}>{p}</li>
          ))}
        </ol>
        <p className="muted">
          From quality engineering to blockchain architecture — with SME-level technical guidance, requirements-to-audit
          delivery and consulting across RWA, DeFi and multi-chain systems.
        </p>
        <div className="btn-row">
          <Link className="btn" href="/leadership">How I lead <ArrowRight /></Link>
          <a className="btn btn-ghost" href={profile.resume} download><Download /> Resume</a>
        </div>
      </div>
      <ol className="role-list" aria-label="Recent roles">
        {recent.map((r) => (
          <li key={r.id}>
            <div>
              <b>{r.company}</b>
              <span>{r.title}</span>
            </div>
            <time>{r.when}</time>
          </li>
        ))}
        <li className="role-more">
          <Link className="text-link" href="/experience">Full chronology since 2008 <ArrowRight /></Link>
        </li>
      </ol>
    </div>
  );
}
