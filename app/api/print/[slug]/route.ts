import { printFile } from "@/lib/print";
import { getTeam } from "@/lib/teams";

// Tee print file: /api/print/<slug>.png
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const team = getTeam((await params).slug.replace(/\.png$/, ""));
  if (!team) return new Response("Not found", { status: 404 });
  return printFile("tee");
}
