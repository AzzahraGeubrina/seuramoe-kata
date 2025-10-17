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
    <div>
        {filteredWords.length > 0 ? (
            <ul>
                {filteredWords.map((item) =>
                <li
                key={item.id}
                >
                    <p className="font-semibold capitalize">{item.acehnese}</p>
                    <p>{item.indonesian}</p>
                </li>
            )}
            </ul>
        ): (
            <p>Tidak ada</p>
        )}
    </div>
);
}