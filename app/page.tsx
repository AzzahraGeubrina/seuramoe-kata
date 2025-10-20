import AlphabetList from "@/components/AlphabetList";
import {Search} from "@/components/search";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SiGitbook } from "react-icons/si";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 70
    }}>
        <SiGitbook className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"/>
        <Search /> 
        <div className="pt-7">
          <AlphabetList />
          <Link className="pt-2 transition-all duration-200 ease-in-out hover:scale-110 font-medium" style={{display: "flex", justifyContent: "center", alignItems: "center"}} href="/list">Lihat semua kosakata<HiArrowNarrowRight className="pt-1 pl-1 w-6 h-6"/></Link>
      </div>
    </div>
  );
}
