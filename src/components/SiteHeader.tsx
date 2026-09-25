"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "@/content/profile";
import { Close, Download, Menu } from "./Icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Sunanda Vempati — home">
          <span className="brand-mark" aria-hidden>SV</span>
          <span>Sunanda Vempati</span>
        </Link>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href={profile.resume} download>
            <Download /> <span>Resume</span>
          </a>
          <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
          </button>
        </div>
        <nav id="site-nav" className="site-nav" data-open={open} aria-label="Primary">
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
