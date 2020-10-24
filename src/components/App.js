import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App(props) {
  const [currentUser, setCurrentUser] = React.useState({});
  const [avatar, setAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState('');
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState();


  React.useEffect(() => {
      api.getUser()
        .then((userInfo) => {
          setCurrentUser(userInfo)
        })
        .catch((err) => {
          console.error(
            err
          );
        });
    },
    []);

  React.useEffect(() => {
      api.getInitialCards()
        .then((cardsArray) => {
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

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen('popup_show');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen('popup_show');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen('popup_show');
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen('');
    setIsEditProfilePopupOpen('');
    setIsAddPlacePopupOpen('');
    //on gh-pages undefined in console
    setSelectedCard(undefined);
  }

  function handleUpdateUser({name, about}) {
    api.editProfile(name, about)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleUpdateAvatar({avatar}) {
    api.setAvatar(avatar)
      .then((res) => {
        setAvatar(res.avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleAddPlaceSubmit({name, link}) {
    api.addCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        console.log(
          newCard
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          avatar={avatar}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />

        <Footer/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>


        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
