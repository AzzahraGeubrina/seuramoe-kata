"use client";

// import { Provider } from "@/components/ui/provider";
// import { Box, Input, InputGroup, Kbd, List, ListItem } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
// import { LuSearch } from "react-icons/lu";
// import data from "../database.json"
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

  return (
    // <Provider>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1 style={{
        fontSize: "48px"
      }}>Selamat Datang.</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Mencegah form submit standar
        }}
      >
        {/* <InputGroup flex="1" startElement={<LuSearch color="white"/>}>
          <Input 
          value={query}
          borderRadius="30px"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari kata..." 
          />
        </InputGroup> */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Setiap perubahan input trigger query
          placeholder="Search..."
        />
        <button type="submit">
          Search
        </button>
      </form>

        {isLoading && <p>Loading...</p>}
        {result.length > 0 ? (
          <ul>
            {result.map((result, index) => (
              <li key={`${result.id}-${index}`}>
                <strong>{result.indonesian} = {result.acehnese}</strong> <br />
                <span>ID: {result.id}</span>
              </li>
            ))}
          </ul>
        //   <Box
        //     mt={2}
        //     border="1px solid #ccc"
        //     borderRadius="md"
        //     bg="rgba(0, 0, 0, 0.5)"
        //     color="white"
        //     maxHeight="300px"        // batas tinggi dropdown
        //     overflowY="auto"         // bikin scroll di dropdown
        //     boxShadow="md"
        //   >
        //     {result.map((result) => (
        // <Box
    //   as="li"
    //   key={result.id}
    //   p={2}
    //   _hover={{ bg: "gray.100", cursor: "pointer" }}
    // >
    //   <strong>{result.indonesian} = {result.acehnese}</strong> <br />
    //   <span>ID: {result.id}</span>
    // </Box>
    //         ))}
    //   </Box>
        ) : query ? (
          <p>Ops, no results found!</p>
        ) : null}
    </div>
  );
}