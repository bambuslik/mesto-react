import React from "react";
import api from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar" style={{backgroundImage: `url(${props.avatar || currentUser.avatar})`}} onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-btn" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-btn" onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements">
        {
          props.cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.handleCardLike} onCardDelete={props.handleCardDelete}/>
          ))
        }
      </ul>
    </main>
  );
}

export default Main;