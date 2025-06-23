import "./App.css";

function App1() {
  const people = [
    {
      id: 0,
      name: 'Creola Katherine Johnson',
      profession: 'mathematician',
    },
    {
      id: 1,
      name: 'Mario José Molina-Pasquel Henríquez',
      profession: 'chemist',
    },
    {
      id: 2,
      name: 'Mohammad Abdus Salam',
      profession: 'physicist',
    },
    {
      id: 3,
      name: 'Percy Lavon Julian',
      profession: 'chemist',
    },
    {
      id: 4,
      name: 'Subrahmanyan Chandrasekhar',
      profession: 'astrophysicist',
    }
  ];

  const chemist = people.filter(p => p.profession === "chemist");

  return (
    <section>
      <h2>People with Profession: Chemist</h2>
      <ul>
        {chemist.map(p1 => (
          <li key={p1.id}>
            <p><strong>Name:</strong> {p1.name}</p>
            <p><strong>Profession:</strong> {p1.profession}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App1;
