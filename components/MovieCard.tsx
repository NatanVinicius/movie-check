"use client";
import { Movie } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const [hoverOn, setHoverOn] = useState(false);
  useEffect(() => {
    console.log(movie, "asomdasd");
  }, [movie]);
  return (
    <div
      className="relative flex items-end w-70 h-90 rounded-lg overflow-hidden"
      onMouseEnter={() => setHoverOn(true)}
      onMouseLeave={() => setHoverOn(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="teste"
          fill
          className={`object-cover rounded-lg brightness-50 transition-transform duration-500 ${hoverOn ? "scale-110" : "scale-100"}`}
        />
      </div>
      <div className="absolute top-2 right-2 px-3 py-1 flex gap-2 items-center text-[#5F798F] rounded-2xl bg-[#0F0F1A]">
        <div className="flex gap-1 items-center">
          <p className="font-bold text-md">4,5</p>
          <span>/</span>
          <p className="text-sm">5</p>
        </div>
        <IoStar />
      </div>
      <footer className="mx-auto flex flex-col gap-2 p-4 text-white z-10">
        <h1 className="font-bold truncate text-[#5F798F] text-lg">{movie.title}</h1>
        <p className="text-xs text-[#3B4B58]">Drama - 2013</p>
        <p
          className={`text-sm text-[#5F798F] overflow-hidden transition-[max-height] duration-500 ease-in-out cursor-pointer ${
            hoverOn ? "max-h-48" : "max-h-5"
          }`}
        >
          {movie.overview}
        </p>
      </footer>
    </div>
  );
};
