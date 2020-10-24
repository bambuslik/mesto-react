import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__trash ${isOwn ? 'element__trash_visible' : 'element__trash_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `like__btn ${isLiked ? 'like__btn_status_active' : 'like__btn_status_inactive'}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="elements__item element">
      <div className="element__img-container" style={{backgroundImage: `url(${card.link})`}} onClick={handleClick}>
      </div>
      <button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like like">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className="like__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;