// Resolves each project's real live favicon and its dominant accent colour,
// for pasting into src/constants/index.js as `favicon`/`accent` fields.
//
// Why this exists: Projects.jsx loads each project's favicon live from its
// own domain rather than a locally bundled logo image, so it always reflects
// whatever icon is actually deployed. Extracting an accent colour from that
// image in the browser needs CORS support the favicon host may not provide,
// so this script precomputes a reliable fallback colour (and resolves the
// *real* favicon path, since generic favicon-lookup services often return a
// generic placeholder for less common hosts).
//
// Run after adding/changing a project: `node scripts/resolve-favicons.mjs`,
// then copy the printed favicon/accent values into constants/index.js.
import { execSync } from "child_process";
import { mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import path from "path";
import { myProjects } from "../src/constants/index.js";

const TMP_DIR = mkdtempSync(path.join(tmpdir(), "favicon-resolve-"));

async function resolveFavicon(href) {
  const res = await fetch(href);
  const html = await res.text();
  const links = [...html.matchAll(/<link[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>/gi)];
  let best = null;
  for (const [tag] of links) {
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i);
    if (!hrefMatch) continue;
    const isSvg = /type=["']image\/svg/i.test(tag) || hrefMatch[1].endsWith(".svg");
    const url = new URL(hrefMatch[1], href).href;
    // Prefer a non-SVG icon (ffmpeg/canvas can sample it directly) unless
    // an SVG is all that's declared.
    if (!best || (best.isSvg && !isSvg)) best = { url, isSvg };
  }
  return best?.url ?? new URL("/favicon.ico", href).href;
}

async function averageColor(imageUrl, tmpBase) {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`fetch failed ${res.status}`);
  const contentType = res.headers.get("content-type") || "";
  const isSvg = contentType.includes("svg") || imageUrl.endsWith(".svg");

  if (isSvg) {
    // ffmpeg has no built-in SVG rasteriser; fall back to the first fill
    // colour declared in the markup (typically the background shape).
    const svgText = await res.text();
    const match = svgText.match(/fill=["'](#[0-9a-fA-F]{3,6})["']/);
    if (match) return match[1];
    throw new Error("no fill colour found in SVG");
  }

  const ext = contentType.includes("png")
    ? "png"
    : contentType.includes("icon") || imageUrl.endsWith(".ico")
      ? "ico"
      : "png";
  const tmpFile = `${tmpBase}.${ext}`;
  writeFileSync(tmpFile, Buffer.from(await res.arrayBuffer()));

  // Composite over neutral grey before averaging so transparent pixels
  // (common in favicons) don't skew the average toward black.
  const out = execSync(
    `ffmpeg -loglevel error -y -f lavfi -i color=c=0x808080:s=64x64 -i "${tmpFile}" ` +
      `-filter_complex "[1:v]scale=64:64[fg];[0:v][fg]overlay=format=auto,scale=1:1" ` +
      `-frames:v 1 -f rawvideo -pix_fmt rgb24 -`,
    { maxBuffer: 1024 * 1024, stdio: ["pipe", "pipe", "ignore"], timeout: 10000 },
  );
  const [r, g, b] = out;
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

for (const p of myProjects) {
  try {
    const faviconUrl = await resolveFavicon(p.href);
    let accent = "#aaf0d1";
    try {
      accent = await averageColor(faviconUrl, path.join(TMP_DIR, p.title.replace(/\s+/g, "_")));
    } catch (e) {
      console.log(`  (colour extraction failed for ${p.title}: ${e.message}, using fallback)`);
    }
    console.log(`${p.title}:\n  favicon: "${faviconUrl}",\n  accent: "${accent}",`);
  } catch (e) {
    console.log(`${p.title}: FAILED ${e.message}`);
  }
}
