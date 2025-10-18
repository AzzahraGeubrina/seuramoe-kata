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
            <div className="columns-[16rem] gap-6 ml-6 mr-6">
                {filteredWords.map((item) =>
                <div
                key={item.id}
                className="pl-4 pr-4  text-gray-800 bg-white/80">
                    <div className="grid grid-cols-2 p-2 pl-4 pr-4">
                <div className="font-semibold">{item.indonesian}</div>
                <div>{item.acehnese}</div>
                <hr className="border-gray-400"></hr>
                <hr className="border-gray-400"></hr>
              </div>
                </div>
            )}
            </div>
        ): (
            <p>Tidak ada</p>
        )}
    </div>
);
}