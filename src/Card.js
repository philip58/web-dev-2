import "./Card.css";

function Card({prop, chooseCard, isFlipped}) {
    const click = () => {
        chooseCard(prop);
    }
    const flip = (check) => {
        if(check === true)
        {
            return "flip";
        }
        else
        {
            return "";
        }
    }
    return (
  <div>
    <div className={flip(isFlipped)}>
      <img className="front" src={prop.src} />
      <img className="back" src="/back.png" onClick={click}/>
    </div>
  </div>
    )
}

export default Card;
