import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Default Open Graph image (1200x630), generated at build time. Replace with a real photo later if desired.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#132636",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#d9922e", letterSpacing: 4, textTransform: "uppercase" }}>
          DeSoto, TX 75115
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 34, marginTop: 20, color: "rgba(255,255,255,0.8)" }}>
            Slab leak repair · Foundation repair · Crack repair · Drainage
          </div>
        </div>
        <div style={{ display: "flex", height: 12, width: 220, background: "#d9922e", borderRadius: 6 }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
