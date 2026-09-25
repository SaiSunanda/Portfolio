import type { ReactNode } from "react";

type Props = {
  id?: string;
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  alt?: boolean;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, lede, alt, children }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} className={`section${alt ? " section-alt" : ""}`} aria-labelledby={headingId}>
      <div className="wrap">
        <div className="section-head">
          {index && <span className="index">{index}</span>}
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={headingId}>{title}</h2>
          {lede && <p className="lede">{lede}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: ReactNode; lede?: ReactNode; children?: ReactNode }) {
  return (
    <div className="wrap page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </div>
  );
}
