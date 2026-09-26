import type { Metadata } from "next";

// Per-page metadata with a unique title, description, canonical URL and the
// shared Open Graph image (child openGraph objects replace, not merge, the root one).
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Sunanda Vempati",
      title: `${title} | Sunanda Vempati`,
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sunanda Vempati — Blockchain Architect | Web3 Technical Lead" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | Sunanda Vempati`, description, images: ["/opengraph-image"] },
  };
}
