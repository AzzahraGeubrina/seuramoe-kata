"use client";

import { useState, useEffect } from "react";

export function Search() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [result, setResult] = useState<{ id: number; indonesian: string; acehnese: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Set timeout untuk debouncing
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400); // Tunggu 500ms setelah berhenti mengetik

    return () => clearTimeout(timer); // Clear timeout jika query berubah sebelum waktu habis
  }, [query]);

  // Fetch data dan filter berdasarkan query
  const handleSearch = async () => {
    if (!debouncedQuery){
      setResult([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true); // Set loading state saat pencarian dimulai

    try {
      const res = await fetch('http://192.168.99.11:3001/list');
      const data: { id: number; indonesian: string; acehnese: string }[] = await res.json();
      const filtered = data.filter(item =>
        item.indonesian.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setResult(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading selesai
    }
  };

  // Panggil handleSearch setiap kali debouncedQuery berubah
  useEffect(() => {
    handleSearch();
  }, [debouncedQuery]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Mencegah form submit standar
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Setiap perubahan input trigger query
          placeholder="Search..."
        />
        <button type="submit">
          Search
        </button>
      </form>

      <div>
        {isLoading && <p>Loading...</p>}
        {result.length > 0 ? (
          <ul>
            {result.map((result) => (
              <li key={result.id}>
                <strong>{result.indonesian} = {result.acehnese}</strong> <br />
                <span>ID: {result.id}</span>
              </li>
            ))}
          </ul>
        ) : query ? (
          <p>Ops, no results found!</p>
        ) : null}
      </div>
    </div>
  );
}