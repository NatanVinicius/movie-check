"use client";
import { Header } from "@/components/header";
import MoviesGrid from "@/components/moviesGrid";

export default function Home() {
  return (
    <main className="pb-8 min-h-screen bg-[#040607] font-[--var:">
      <Header />
      <MoviesGrid title="Explorar" />
    </main>
  );
}
