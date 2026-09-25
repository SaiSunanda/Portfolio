import type { Metadata } from "next";
import { QuantumPath } from "@/components/Blocks";
import { PageHero, Section } from "@/components/Section";
import { currentLearning } from "@/content/profile";

export const metadata: Metadata = {
  title: "Quantum Computing",
  description:
    "Beyond blockchain: currently studying Quantum Computing at the Indian Institute of Science (IISc), Bengaluru, as continuous technical development.",
  alternates: { canonical: "/quantum" },
};

const why = [
  {
    title: "Signatures are the exposed layer",
    body: "Blockchains rely on elliptic-curve signatures such as ECDSA (secp256k1) and Ed25519. Shor's algorithm, on a sufficiently large fault-tolerant quantum computer, would break them — which is why post-quantum signature schemes matter to anyone designing long-lived on-chain systems.",
  },
  {
    title: "Hashes degrade more gracefully",
    body: "Grover's algorithm offers only a quadratic speed-up against hash functions, so primitives like Keccak-256 and SHA-256 are far less affected. Understanding that difference helps separate real risk from hype.",
  },
  {
    title: "Crypto-agility is an architecture concern",
    body: "Assets tokenized today — real estate, stablecoin reserves — may need to stay secure for decades. Designing for key rotation, upgradeable verification and migration paths is an architecture decision, not a future problem.",
  },
];

export default function QuantumPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond blockchain"
        title="Exploring Quantum Computing"
        lede="Alongside blockchain engineering, I am currently studying Quantum Computing through the Indian Institute of Science (IISc), Bengaluru. It is part of a deliberate habit of continuous technical development — following the next shift in computing and the cryptography that blockchains depend on."
      >
        <div className="tags mt-24">
          <span className="tag tag-accent">{currentLearning.org}</span>
          <span className="tag">Status: {currentLearning.status}</span>
        </div>
      </PageHero>

      <Section id="path" eyebrow="Learning path" title="Classical → Blockchain → Distributed → Quantum">
        <QuantumPath />
      </Section>

      <Section
        id="why"
        eyebrow="Why it matters"
        title="Why a blockchain architect studies quantum"
        lede="The questions I am learning to ask — framed as a student of the field, not as a claim of expertise."
        alt
      >
        <div className="grid-3">
          {why.map((w) => (
            <article key={w.title} className="card stack-12">
              <h3 style={{ fontSize: 17 }}>{w.title}</h3>
              <p className="muted" style={{ fontSize: 14.5 }}>{w.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
