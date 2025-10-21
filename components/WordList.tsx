import db from "@/public/database.json"

interface ListKataProps {
    letter: string;
}

export default function WordList({ letter }: ListKataProps) {
    const words = db.list;
    const filteredWords = words.filter((item) =>
    item.acehnese.toLowerCase().startsWith(letter.toLowerCase())
);
return (
    <div >
        {filteredWords.length > 0 ? (
           <div className="columns-[16rem] gap-6 ml-7 mr-7 bg-white/80 pt-6 pb-6 rounded-lg">
                {filteredWords.map((item) => (
                    <div
                    key={item.id}
                    className="break-inside-avoid pl-4 pr-4 text-gray-800 border-l border-gray-400"
                    >
                    <div className="grid grid-cols-2 items-start pt-1 pl-4 pr-4">
                        <p className="font-semibold">{item.acehnese}</p>
                        <p>{item.indonesian}</p>
                        <hr className="border-gray-400 mt-2" />
                        <hr className="border-gray-400 mt-2" />
                    </div>
                    </div>
                ))}
                </div>

        ): (
            <p className="pl-4 pr-4 ml-7 mr-7 text-gray-800 bg-white/80 italic pt-6 pb-6 rounded-lg">Mohon maaf, kata yang berawalan huruf {letter.toUpperCase()} belum tersedia.</p>
        )}
        <br></br>
    </div>
);
}