import "./App.css";
import Card from "./Card";

const cardValues = [
  { src: "/gold.png" },
  { src: "/hito.png" },
  { src: "/merry.png" },
  { src: "/strawhat.png" },
  { src: "/sun.png" },
];

function App() {
  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <button >New Game</button>

      <div className="card-grid">
        {cardValues.map((Map) => (
          <Card key={Map.id} prop={Map} ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
