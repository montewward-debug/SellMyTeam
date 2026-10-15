import { printFile } from "@/lib/print";
import { getTeam } from "@/lib/teams";
import { printColorHex } from "@/lib/products";

// Hoodie print file: /api/print/hoodie/<slug>.png
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const team = getTeam((await params).slug.replace(/\.png$/, ""));
  if (!team) return new Response("Not found", { status: 404 });
  return printFile("hoodie", undefined, printColorHex(team, "hoodie"));
}
