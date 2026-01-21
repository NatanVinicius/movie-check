"use client";
import { useState } from "react";
import { MdMovieCreation } from "react-icons/md";
import { PiPopcornBold } from "react-icons/pi";

const navItems = ["Explorar", "Meus Filmes"];

export const Header = () => {
  const [activeItem, setActiveItem] = useState("Explorar");
  return (
    <header className="flex items-center p-6">
      <h1 className="font-bold text-2xl text-[#CBFE00]"></h1>
      <nav className="flex gap-4 mx-auto">
        {navItems.map((item) => {
          const isActive = activeItem === item;

          return (
            <div
              key={item}
              className={`
              flex items-center gap-1 px-2 py-1 rounded-md text-[#3B4B58] cursor-pointer
              ${isActive ? "bg-[#161C21] text-[#CBFE00]" : "bg-[#161C21]/0"}
              hover:text-[#CBFE00] hover:bg-[#161C21]
              transition-colors duration-200
            `}
              onMouseEnter={() => setActiveItem(item)}
            >
              {item == "Explore" ? <PiPopcornBold /> : <MdMovieCreation />}
              <p>{item}</p>
            </div>
          );
        })}
      </nav>
    </header>
  );
};
