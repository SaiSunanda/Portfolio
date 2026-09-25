import Link from "next/link";
import { nav, profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
        <nav aria-label="Footer">
          {nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <a href={profile.resume} download>Resume</a>
        </nav>
      </div>
    </footer>
  );
}
