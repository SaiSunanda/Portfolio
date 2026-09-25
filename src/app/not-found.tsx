import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-hero">
      <span className="eyebrow">404</span>
      <h1>This block isn&rsquo;t on-chain.</h1>
      <p className="lede">The page you were looking for doesn&rsquo;t exist.</p>
      <div className="btn-row mt-40">
        <Link className="btn btn-primary" href="/">Back home</Link>
        <Link className="btn" href="/case-studies">Case studies</Link>
      </div>
    </div>
  );
}
