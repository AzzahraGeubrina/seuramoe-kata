"use client";

import Link from "next/link";

export default function AlphabetList() {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="flex flex-wrap max-w-100 items-center justify-center">
      {letters.map((letter) => (
        <Link
          key={letter}
          href={`/${letter.toLowerCase()}`}
          className="px-1 m-1 text-center font-semibold transition-all duration-200 ease-in-out
            hover:scale-135 hover:shadow-md"
        >
          {letter}
        </Link>
      ))}
    </div>
  );
}
