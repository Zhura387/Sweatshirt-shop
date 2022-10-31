import React, { } from 'react';
import './card.css';

function Card({ id, model, name, addCard, imageUrl, size, price, nul }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickSave = () => {
    addCard({ id, name, price, imageUrl, model })
    setIsAdded(!isAdded)
  }

  return (
    <div className='card'>
      <div className="cardText">
        <h4>{name}</h4>
        <img src={imageUrl}></img>
        <h3>{model}</h3>
        <p>{size}</p>
        <p>{nul}</p>
      </div>
      <div className='cardFooter'>
        <p>{price}</p>
        <button onClick={onClickSave}>
          <img className="btnSave" src='./Plus.png' alt='+'></img>
        </button>
      </div>
    </div>
  )
}
export default Card;