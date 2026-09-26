import Link from "next/link";
import { crossChain, decisions, deploymentFlow, methodology, securityFramework, threatModel } from "@/content/architecture";
import { LayerDiagram } from "./Diagram";
import { ArrowRight, Chevron } from "./Icons";

export function Methodology({ steps = methodology, label }: { steps?: { step: string; note: string }[]; label: string }) {
  return (
    <ol className="process" aria-label={label}>
      {steps.map((s) => (
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

// Expandable architecture decision records: Context → Decision → Why → Trade-off → Impact.
export function DecisionRecords() {
  return (
    <div className="adrs">
      {decisions.map((d, i) => (
        <details key={d.id} id={`decision-${d.id}`} className="adr" open={i === 0}>
          <summary>
            <span className="adr-n">ADR-{String(i + 1).padStart(2, "0")}</span>
            <span className="adr-title">
              <b>{d.question}</b>
              <span>{d.summary}</span>
            </span>
            <Chevron className="chev" width={20} height={20} />
          </summary>
          <dl className="adr-body">
            <div><dt>Context</dt><dd>{d.context}</dd></div>
            <div><dt>Decision</dt><dd>{d.decision}</dd></div>
            <div className="adr-why">
              <dt>Why</dt>
              <dd>
                <ul className="bullets">
                  {d.considerations.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </dd>
            </div>
            <div className="adr-tradeoff"><dt>Trade-off</dt><dd>{d.tradeoff}</dd></div>
            <div className="adr-impact"><dt>Impact</dt><dd>{d.impact}</dd></div>
          </dl>
          <p className="applied adr-applied">Applied in: {d.appliedIn}</p>
        </details>
      ))}
    </div>
  );
}

export function SecurityArchitecture() {
  return (
    <div className="stack-20">
      <div className="threat-head" aria-hidden>
        <span>Threat</span><span>Trust boundary</span><span>Control</span><span>Failure response</span>
      </div>
      <ol className="threats" aria-label="Threat model examples: threat, trust boundary, control and failure response">
        {threatModel.map((t) => (
          <li key={t.threat} className="threat reveal">
            <div data-k="Threat"><b>{t.threat}</b></div>
            <div data-k="Trust boundary">{t.boundary}</div>
            <div data-k="Control">{t.control}</div>
            <div data-k="Failure response">{t.response}</div>
          </li>
        ))}
      </ol>
      <div className="controls mt-24">
        {securityFramework.map((g) => (
          <div key={g.group} className="card controls-group">
            <span className="evidence-label">{g.group}</span>
            <ul className="checklist">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="muted small">
        A framework for reasoning about controls, not a claim that every control exists in every system. Case studies
        state what was actually applied.
      </p>
    </div>
  );
}

export function CrossChainArchitecture() {
  return (
    <div className="split">
      <LayerDiagram layers={crossChain.diagram} label={crossChain.label} />
      <div className="stack-20">
        <span className="evidence-label">Questions every cross-chain design must answer</span>
        <ol className="questions">
          {crossChain.questions.map((q) => <li key={q}>{q}</li>)}
        </ol>
        <Link className="text-link" href="/case-studies/rbc-frk">Applied in RBC / FRK <ArrowRight /></Link>
        <p className="muted small">Reference architecture — networks shown illustrate the pattern, not a list of live deployments.</p>
      </div>
    </div>
  );
}

export function DeploymentArchitecture() {
  return <Methodology steps={deploymentFlow} label="Deployment architecture, from environment configuration to audit handoff" />;
}
