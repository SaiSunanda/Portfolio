import type { Metadata } from "next";
import Link from "next/link";
import { InfosysAward, LeadershipPillars, LeadershipProcess, NextLevel } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { PageHero, Section } from "@/components/Section";
import { leadershipPage } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Technical Leadership",
  description:
    "Architecture, delivery, engineering and stakeholder leadership in blockchain systems — evidenced by RWA, DeFi and multi-chain token work.",
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Technical Leadership"
        lede="From writing smart contracts to leading engineering decisions. Every capability below is tied to evidence from real roles — no inflated titles, no invented team sizes."
      />

      <Section id="pillars" eyebrow="Four dimensions" title="From Smart Contracts to System Leadership">
        <LeadershipPillars />
      </Section>

      <Section id="areas" eyebrow="In practice" title="How leadership shows up in the work" alt>
        <div className="stack-20">
          {leadershipPage.map((s, i) => (
            <article key={s.id} id={s.id} className="card">
              <div className="split" style={{ gap: 32 }}>
                <div className="stack-12">
                  <span className="cs-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: 24 }}>{s.title}</h3>
                  <div className="tags">
                    {s.items.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="stack-12">
                  <p style={{ color: "#cbd5e1" }}>{s.body}</p>
                  <div className="evidence" style={{ marginTop: 0 }}>
                    <span className="evidence-label">Evidence</span>
                    <p>{s.evidence}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="model" eyebrow="Model" title="How I Approach Technical Leadership">
        <div className="split">
          <div className="sticky stack-20">
            <p className="quote">
              My approach combines hands-on blockchain engineering with architecture, security, delivery planning,
              mentoring and stakeholder collaboration.
            </p>
            <p className="muted">
              I lead from inside the work: the same person who frames the architecture also reviews the code,
              prepares the audit and verifies the deployment. That continuity is what keeps decisions honest.
            </p>
          </div>
          <LeadershipProcess />
        </div>
      </Section>

      <Section
        id="earlier"
        eyebrow="Not new"
        title="Leadership signals from earlier in my career"
        lede="Knowledge sharing and enabling others were part of my work well before blockchain."
        alt
      >
        <InfosysAward />
      </Section>

      <Section id="next-level" eyebrow="Direction" title="Ready for the Next Level">
        <NextLevel />
        <div className="section-foot">
          <Link className="text-link" href="/case-studies">See leadership in the case studies <ArrowRight /></Link>
        </div>
      </Section>
    </>
  );
}
