import "./App.css";

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

function App() {
  const listItems = people.map(person =>
    <li key={person}>{person}</li>
  );

  return (
    <div className="list">
      <h2>Peoples</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
