import { NextResponse } from "next/server";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = process.env.TMDB_KEY!;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "popular";

  let endpoint = "/movie/popular";
  if (type === "top_rated") endpoint = "/movie/top_rated";
  if (type === "upcoming") endpoint = "/movie/upcoming";

  try {
    const res = await fetch(`${TMDB_BASE_URL}${endpoint}?api_key=${TMDB_API_KEY}&language=pt-BR`);

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
