export default async function List() {
  const res = await fetch('http://localhost:3001/list');
  const list = await res.json();
  return (
    <div>
      <h1>List kata</h1>
      {list.map((list: { id: number; indonesian: string; acehnese: string }) => (
        <article key={list.id}>
          <p>{list.id}. {list.indonesian} = {list.acehnese}</p>
        </article>
      ))}
    </div>
  );
}