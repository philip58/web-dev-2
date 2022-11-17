import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const cardValues = [
  { src: "/gold.png", match: false },
  { src: "/hito.png", match: false },
  { src: "/merry.png", match: false },
  { src: "/strawhat.png", match: false },
  { src: "/sun.png", match: false },
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
    if (firstCard && secondCard) {
      if (firstCard.src === secondCard.src) {
        setCardsArray(cards => {
          return cards.map((Map) => {
            if(Map.src === firstCard.src && Map.src === secondCard.src)
            {
              return (
                {...Map, match: true});
            }
            else 
            {
              return Map;
            }
          })
        })
        nextTurn();
      } else {
        nextTurn();
      }
    }
  }, [firstCard, secondCard]);

  console.log(cardsArray)

  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <button onClick={shuffle}>New Game</button>

      <div className="card-grid">
        {cardsArray.map((Map) => (
          <Card key={Map.id} prop={Map} 
          chooseCard={chooseCard} 
          isFlipped={Map.match === true || Map === firstCard || Map === secondCard}>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
