import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const title = "Sunanda Vempati | Blockchain Architect · Smart Contract Architect · Web3 Technical Lead";
const description =
  "Blockchain Engineer, Smart Contract Architect and Web3 Consultant specializing in RWA, DeFi, token infrastructure, cross-chain systems, EVM and Solana.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Sunanda Vempati" },
  description,
  applicationName: "Sunanda Vempati — Portfolio",
  authors: [{ name: profile.name, url: profile.linkedin }],
  keywords: [
    "Blockchain Architect",
    "Smart Contract Architect",
    "Blockchain Technical Lead",
    "Web3 Technical Lead",
    "Blockchain Solutions Architect",
    "Web3 Consultant",
    "RWA Architect",
    "DeFi Architect",
    "Solidity Developer",
    "Smart Contract Engineer",
    "EVM",
    "Solana",
    "Tokenization",
    "Blockchain Infrastructure",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: "Sunanda Vempati",
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070A0F",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Blockchain Consultant",
  worksFor: { "@type": "Organization", name: "AppMindsGlobal" },
  description: profile.summary,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Smart contracts", "Solidity", "Rust", "Solana", "EVM", "ERC-3643", "ERC-1155", "Real-world assets", "DeFi", "Stablecoins", "Blockchain governance", "Cross-chain", "LayerZero", "Fireblocks", "Metaverse"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "IIIT Bangalore" },
    { "@type": "CollegeOrUniversity", name: "Indira Gandhi National Open University" },
    { "@type": "CollegeOrUniversity", name: "Osmania University" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
