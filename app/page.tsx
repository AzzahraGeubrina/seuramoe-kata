import {Search} from "@/components/search";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
        <Search />
        <Link style={{display: "flex", justifyContent: "center", alignItems: "center"}} href="/list">List</Link>
    </div>
  );
}
