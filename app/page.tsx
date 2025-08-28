import Image from "next/image";
import {Search} from "@/app/search";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Search />
      <Link style={{display: "flex", justifyContent: "center", alignItems: "center"}} href="/list">List</Link>
    </div>
  );
}
