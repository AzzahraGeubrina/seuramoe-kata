import WordList from "@/components/WordList";
import { SiGitbook } from "react-icons/si";

interface Params {
  letter: string;
}

export default async function LetterPage({ params }: { params: Promise<Params> }) {
  const { letter } = await params;
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
      <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center pt-2 pb-9">Daftar Kata Bahasa Aceh Berawalan {letter.toUpperCase()}</h1>

      <WordList letter={letter} />

      <div className="mt-6">
    </div>
    </div>
  );
}
