import AlphabetList from "@/components/AlphabetList";
import {Search} from "@/components/Search";
import Link from "next/link";
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
        <div className="pt-7">
          <AlphabetList />
          <Link className="pt-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}} href="/list">Lihat semua kosakata</Link>
      </div>
    </div>
  );
}
