import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item element">
      <div className="element__img-container" style={{backgroundImage: `url(${card.link})`}} onClick={handleClick}></div>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like like">
          <button className="like__btn"></button>
          <span className="like__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;