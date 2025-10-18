import { SiGitbook } from "react-icons/si";
import db from "../../public/database.json"
export default async function List() {
  let lastLetter = "";
  return (
    <div className="max-w-7xl">
      <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 30
    }}>
      <SiGitbook className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"/>
      </div>
      <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center pt-2 pb-9">Daftar Kata Bahasa Aceh</h1>
      <div className="columns-[16rem] gap-6 ml-6 mr-6">
    {db.list.map((item) => {
      const firstLetter = item.indonesian[0].toUpperCase();
      const showHeader = firstLetter !== lastLetter;
      lastLetter = firstLetter;
      return (
        <div key={item.id} className="pl-4 pr-4  text-gray-800 bg-white/80">
          {showHeader && (
            <div className="font-bold text-2xl pt-3 p-2 text-center">{firstLetter}</div>
          )}
          <div className="grid grid-cols-2 p-2 pl-4 pr-4">
            <div className="font-semibold">{item.indonesian}</div>
            <div>{item.acehnese}</div>
            <hr className="border-gray-400"></hr>
            <hr className="border-gray-400"></hr>
            </div>
        </div>
      )
    })}
    </div>
    </div>
  );
}