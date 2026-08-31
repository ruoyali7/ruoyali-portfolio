import { NextResponse } from "next/server";

export async function GET() {
  // The public demo intentionally exposes only aggregate, non-identifying metrics.
  // A production Supabase query can be added here without exposing service keys.
  return NextResponse.json({
    mode: "demo",
    updatedAt: new Date().toISOString(),
    metrics: { publishedAssets: 105, approvedHooks: 64, trackedVisits: 1280, codeCopies: 214, rsRedirects: 97 },
    daily: [120, 164, 142, 188, 214, 232, 220],
  });
}
