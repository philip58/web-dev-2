import "./Card.css";

function Card({prop}) {
    return (
  <div className="card">
    <div>
      <img className="front" src={prop.src} />
      <img className="back" src="/back.png"/>
    </div>
  </div>
    )
}

export default Card;
