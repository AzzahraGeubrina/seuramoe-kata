"use client";

import { useState, useEffect, useCallback } from "react";
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
  const handleSearch = useCallback(async () => {
    if (!debouncedQuery){
      setResult([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true); // Set loading state saat pencarian dimulai

    try {
      const res = await fetch("/database.json");
      const raw = await res.json();

      const data = raw.list ?? [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filtered = data.filter((item: any)=>
        item.indonesian.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setResult(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading selesai
    }
  }, [debouncedQuery]);

  // Panggil handleSearch setiap kali debouncedQuery berubah
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  function highligtQ(text: string, typed: string): string {
    if(!typed.trim()) return text;
    const regex = new RegExp(`(${typed})`, "gi");
    return text.replace(regex, `<b>$1</b>`);
  }

  return (
    // <Provider>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center pt-3">Yak Meurunoe Bahsa Aceh!</h1>
      <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-center pb-3">Mari Belajar Bahasa Aceh!</h2>      
      <div className="w-full max-w-sm min-w-[200px] mt-6 bg-white/40 p-2 rounded-lg">
        <form className="relative flex items-center"
        onSubmit={(e) => {
          e.preventDefault(); 
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-gray-600">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
      
          <input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-200 rounded-lg pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
          placeholder="Cari kosa kata..." 
          />
        </form>
        <div className="z-10 bg-white rounded-lg shadow-sm mt-1">
          {isLoading && 
          <div className="flex justify-center py-2 px-4">
            <div className="w-5 h-5 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
          </div>}
          {result.length > 0 ? (
            <ul className="max-h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200" >
              {result.map((result, index) => (
              <li key={`${result.id}-${index}`} className="items-center px-4 py-1 hover:bg-gray-100 text-gray-700">
                <a href="#" >
                  <p dangerouslySetInnerHTML={{
                    __html:`${highligtQ(result.indonesian, debouncedQuery)}`
                  }}/></a>
                <p className="text-sm text-gray-700 font-style: italic">{result.acehnese}</p>
              </li>
              ))}
              </ul>
              ) : query ? (
              <p className="text-sm text-gray-700 py-2 px-4 font-style: italic">Kata tidak ada</p>
        ) : null}
        </div>
      </div>
    </div>
  );
}