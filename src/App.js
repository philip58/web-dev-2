import { useEffect, useState } from "react";
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
  const [firstCard, setFirstCard] = useState(null);

  const [secondCard, setSecondCard] = useState(null);

  const [cardsArray, setCardsArray] = useState([]);

  const [turnsPassed, setTurnsPassed] = useState(0);

  const shuffle = () => {
    const newCardArray = [...cardValues, ...cardValues]

      .sort(() => Math.random() - 0.2)

      .map((cardMap) => ({ ...cardMap, id: Math.random() }));

    setCardsArray(newCardArray);

    setTurnsPassed(0);
  };

  const chooseCard = (choice) => {
    if (firstCard === null) {
      setFirstCard(choice);
    } else {
      setSecondCard(choice);
    }
  };

  const nextTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurnsPassed((currentTurns) => currentTurns + 1);
  };

  useEffect(() => {
    if(firstCard && secondCard)
    {
      if(firstCard.src === secondCard.src)
      {
        console.log("match")
        nextTurn();
      }
      else 
      {
        console.log("dont match")
        nextTurn();
      }
    }
  },[firstCard,secondCard])

  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <button onClick={shuffle}>New Game</button>

      <div className="card-grid">
        {cardsArray.map((Map) => (
          <Card key={Map.id} prop={Map} chooseCard={chooseCard}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
