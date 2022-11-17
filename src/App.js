import { useState } from "react";
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
  const [cardsArray, setCardsArray] = useState([]);

  const shuffle = () => {
    const newCardArray = [...cardValues, ...cardValues]

      .sort(() => Math.random() - (.5))

      .map((cardMap) => ({ ...cardMap, id: Math.random() }));

    setCardsArray(newCardArray);
  };


  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <button onClick={shuffle}>New Game</button>

      <div className="card-grid">
        {cardsArray.map((Map) => (
          <Card key={Map.id} prop={Map} ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
