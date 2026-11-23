import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// 512x512 PNG of the D monogram (app/icon.svg) for the Organization schema logo. Generated at build time.
export const dynamic = "force-static";

const SIZE = 512;

export function GET() {
  const icon = `data:image/svg+xml;base64,${readFileSync(join(process.cwd(), "src/app/icon.svg")).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} width={SIZE} height={SIZE} alt="" />
      </div>
    ),
    { width: SIZE, height: SIZE },
  );
}
