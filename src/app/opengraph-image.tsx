import { ImageResponse } from "next/og";

export const alt = "Sunanda Vempati — Blockchain Architect | Web3 Technical Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const flow = ["REQUIREMENTS", "TRUST MODEL", "ARCHITECTURE", "SECURITY", "PRODUCTION"];

// Architecture-styled share card: name, positioning and a system flow on a grid.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#070A0F",
          backgroundImage:
            "linear-gradient(rgba(30,42,54,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,54,0.55) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "#F3F4F6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "2px solid #2B3B4B",
              background: "#0D1117",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#22D3EE",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            SV
          </div>
          <div style={{ fontSize: 20, letterSpacing: 6, color: "#94A3B8" }}>BLOCKCHAIN ARCHITECTURE PORTFOLIO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>SUNANDA VEMPATI</div>
          <div style={{ fontSize: 38, color: "#22D3EE" }}>
            Blockchain Architect | Web3 Technical Lead
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {flow.map((f, i) => (
            <div key={f} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  padding: "12px 18px",
                  borderRadius: 10,
                  border: i === 0 ? "2px solid #3B82F6" : "2px solid #2B3B4B",
                  background: "#111821",
                  fontSize: 20,
                  letterSpacing: 2,
                  color: "#F3F4F6",
                }}
              >
                {f}
              </div>
              {i < flow.length - 1 && <div style={{ width: 28, height: 2, background: "#3B82F6" }} />}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
