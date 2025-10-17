"use client";

import Link from "next/link";

export default function AlphabetList() {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="flex flex-wrap max-w-84 items-center justify-center">
      {letters.map((letter) => (
        <Link
          key={letter}
          href={`/${letter.toLowerCase()}`}
          className="pr-1 pl-2 pb-1 text-center font-semibold"
        >
          {letter}
        </Link>
      ))}
    </div>
  );
}
