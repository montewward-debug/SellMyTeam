import { printFile } from "@/lib/print";
import { getTeam } from "@/lib/teams";

// Tee print file: /api/print/<slug>.png
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug.replace(/\.png$/, "");
  const team = getTeam(slug);
  if (!team) return new Response("Not found", { status: 404 });
  const ink = slug === "nfl-cincinnati" ? "#000000" : slug === "nfl-cleveland" ? "#FF3C00" : slug === "nfl-baltimore" ? "#C5A253" : undefined;
  return printFile("tee", undefined, ink);
}
