import {Search} from "@/components/search";
import Link from "next/link";
import { start } from "node:repl";
import { SiGitbook } from "react-icons/si";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 100
    }}>
      {/* <div className="flex items-start justify-center min-h-screen pt-16"> */}
        <SiGitbook className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"/>
        <Search />
        {/* <Link style={{display: "flex", justifyContent: "center", alignItems: "center"}} href="/list">List</Link> */}
    </div>
  );
}
