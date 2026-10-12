import type { LocationContent } from "@/types/content";

export type Highlight = "all" | "north" | "south" | "east" | "west" | "downtown";

/** Which part of the schematic map to highlight. Neighborhood positions aren't pinned (not verified). */
export function mapHighlight(content: LocationContent): Highlight {
  if (content.kind === "direction") return content.areaName.split(" ")[0].toLowerCase() as Highlight;
  if (/downtown/i.test(content.areaName)) return "downtown";
  return "all";
}

/** Schematic (not to scale) DeSoto map with major roads. */
export function DeSotoMap({ highlight, label }: { highlight: Highlight; label: string }) {
  const zone = {
    north: { x: 30, y: 30, w: 340, h: 95 },
    south: { x: 30, y: 175, w: 340, h: 95 },
    west: { x: 30, y: 30, w: 150, h: 240 },
    east: { x: 220, y: 30, w: 150, h: 240 },
  } as const;
  const z = highlight in zone ? zone[highlight as keyof typeof zone] : null;
  return (
    <svg viewBox="0 0 400 300" className="w-full" role="img" aria-labelledby="map-title">
      <title id="map-title">{`Schematic map of DeSoto, TX highlighting ${label}`}</title>
      <rect x="30" y="30" width="340" height="240" rx="18" className={highlight === "all" ? "fill-accent/25 stroke-accent-dark" : "fill-surface stroke-border"} strokeWidth="2" />
      {z && <rect x={z.x} y={z.y} width={z.w} height={z.h} rx="18" className="fill-accent/35" />}
      {/* East-west roads */}
      {[
        { y: 70, name: "Belt Line Rd" },
        { y: 130, name: "Pleasant Run Rd" },
        { y: 190, name: "Wintergreen Rd" },
        { y: 245, name: "Parkerville Rd" },
      ].map((r) => (
        <g key={r.name}>
          <line x1="30" x2="370" y1={r.y} y2={r.y} className="stroke-secondary/50" strokeWidth="2" />
          <text x="38" y={r.y - 5} className="fill-muted text-[10px]">{r.name}</text>
        </g>
      ))}
      {/* North-south roads */}
      <line x1="110" x2="110" y1="30" y2="270" className="stroke-secondary/50" strokeWidth="2" />
      <text x="114" y="44" className="fill-muted text-[10px]">Westmoreland Rd</text>
      <line x1="210" x2="210" y1="30" y2="270" className="stroke-primary/70" strokeWidth="3" />
      <text x="214" y="44" className="fill-primary text-[10px] font-semibold">Hampton Rd</text>
      <line x1="345" x2="345" y1="20" y2="280" className="stroke-primary" strokeWidth="6" />
      <text x="352" y="160" className="fill-primary text-[11px] font-bold" transform="rotate(90 352 160)">I-35E</text>
      {highlight === "downtown" && (
        <g>
          <circle cx="210" cy="130" r="22" className="animate-ripple [animation-iteration-count:3] [transform-box:fill-box] origin-center fill-accent/40" />
          <circle cx="210" cy="130" r="7" className="fill-accent-dark" />
        </g>
      )}
      <text x="200" y="292" textAnchor="middle" className="fill-muted text-[10px]">Schematic, not to scale</text>
    </svg>
  );
}
