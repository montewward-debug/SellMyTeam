import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { printFile } from "@/lib/print";
import { getTeam } from "@/lib/teams";

// Tee print file: /api/print/<slug>.png
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug.replace(/\.png$/, "");
  const team = getTeam(slug);
  if (!team) return new Response("Not found", { status: 404 });
  if (slug === "nfl-cincinnati") {
    const png = await readFile(join(process.cwd(), "public", "print", "bengals-impact-black.png"));
    return new Response(png, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" } });
  }
  return printFile("tee");
}
