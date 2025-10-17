import db from "../../public/database.json"
export default async function List() {
  return (
    <div>
      <h1>List kata</h1>
      {db.list.map((item, index) => (
        <article key={item.id ?? index}>
          <p>{item.id}. {item.indonesian} = {item.acehnese}</p>
        </article>
      ))}
    </div>
  );
}