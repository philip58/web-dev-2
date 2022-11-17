import "./Card.css";

function Card({prop, chooseCard}) {
    const click = () => {
        chooseCard(prop);
    }
    return (
  <div className="card">
    <div>
      <img className="front" src={prop.src} />
      <img className="back" src="/back.png" onClick={click}/>
    </div>
  </div>
    )
}

export default Card;
