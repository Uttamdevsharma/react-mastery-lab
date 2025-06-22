import "./App.css";

function Item({ name, isPacked }) {

  const ischeckMark = isPacked ? "✅" : null ;
  return (
     <li className="item">
      {name} {ischeckMark }
      </li>
  );
  
}

function App() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

export default App