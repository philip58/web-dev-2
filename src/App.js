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
  useEffect(() => { shuffle(); },[]);

  const [firstCard, setFirstCard] = useState(null);

  const [secondCard, setSecondCard] = useState(null);

  const [cardsArray, setCardsArray] = useState([]);

  const [turnsPassed, setTurnsPassed] = useState(0);

  const [disableCard, setDisableCard] = useState(false);

  const shuffle = () => {
    const newCardArray = [...cardValues, ...cardValues]

      .sort(() => Math.random() - 0.5)

      .map((cardMap) => ({ ...cardMap, id: Math.random() }));

    setCardsArray(newCardArray);

    setTimeout(() => setTurnsPassed(0),850);

    setFirstCard(null);

    setSecondCard(null);
  };

  const chooseCard = (choice) => {
    if (firstCard === null) {
      setFirstCard(choice);
    } else {
      setSecondCard(choice);
    }
  };


  const nextTurn = () => {
    setTurnsPassed((currentTurns) => currentTurns + 1);
    setFirstCard(null);
    setSecondCard(null);
    setDisableCard(false);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisableCard(true);
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
        setTimeout(() => nextTurn(), 850);
      }
    }
  }, [firstCard, secondCard]);

  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <button onClick={shuffle}>New Game</button>
      <p>Turns Passed: {turnsPassed} </p>

      <div className="card-grid">
        {cardsArray.map((Map) => (
          <Card key={Map.id} prop={Map} 
          chooseCard={chooseCard} 
          isFlipped={Map.match === true || Map === firstCard || Map === secondCard}
          isDisabled={disableCard}>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
