"use client";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { getMovies } from "@/lib/api";
import { Movie } from "@/lib/types";
import { MovieCardSkeleton } from "./movieCardSkeleton";

type Props = {
  title: string;
};

export default function MoviesGrid({ title }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies("popular");
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    setTimeout(() => {
      fetchMovies();
      setIsLoading(true);
    }, 1000);
  }, []);

  return (
    <section className="mt-20 w-298 mx-auto flex flex-col gap-2">
      <header>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <input type="text" name="name" id="name" placeholder="Pesquisar filme" />
      </header>
      <div className="grid grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <MovieCardSkeleton key={i} />)
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}
