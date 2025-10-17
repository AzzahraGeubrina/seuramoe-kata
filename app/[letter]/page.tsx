import WordList from "@/components/WordList";

interface Params {
  letter: string;
}

export default async function LetterPage({ params }: { params: Promise<Params> }) {
  const { letter } = await params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Kata berawalan huruf {letter.toUpperCase()}
      </h1>

      <WordList letter={letter} />

      <div className="mt-6">
      </div>
    </main>
  );
}
