import { printFile } from "@/lib/print";
import { getTeam } from "@/lib/teams";
import { printColorHex } from "@/lib/products";

// Tee print file: /api/print/<slug>.png
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug.replace(/\.png$/, "");
  const team = getTeam(slug);
  if (!team) return new Response("Not found", { status: 404 });
  const color = team.slug === "new-york-navy" ? "pinstripe" : printColorHex(team, "tee");
  return printFile("tee", undefined, color);
}
