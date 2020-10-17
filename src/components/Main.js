import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

      Promise.all([api.getUser(), api.getInitialCards()])
        .then(([userInfo, cardsArray]) => {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);

          setCards(cardsArray);
        })
        .catch((err) => {
          console.log(
            err
          );
        });
    },
    []
  );

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar" style={{backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-btn" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-btn" onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements">
        {
          cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          ))
        }
      </ul>
    </main>
  );
}

export default Main;