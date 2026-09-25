import type { Metadata } from "next";
import { ContactBlock } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open to blockchain architecture, technical leadership, Web3 consulting, RWA, DeFi and engineering leadership opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="wrap page-hero" style={{ paddingBottom: 120 }}>
      <ContactBlock as="h1" />
    </div>
  );
}
