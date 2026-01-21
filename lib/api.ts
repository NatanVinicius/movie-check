import { Movie } from "./types";

type MovieResponse = {
  results: Movie[];
};

export async function getMovies(type: "popular" | "top_rated" | "upcoming") {
  const res = await fetch(`/api/movies?type=${type}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data: MovieResponse = await res.json();
  return data.results;
}
