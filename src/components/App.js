import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState('');
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleCardClick(card){
    setSelectedCard(card);
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
    setSelectedCard('');
  }

  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>

      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input type="url" placeholder="Ссылка на аватар" name="link" className="form__input-text input-avatar-img" required autoComplete="off"/>
          <span className="form__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input type="text" name="name" className="form__input-text input-profile-name" required minLength="2" maxLength="40" autoComplete="off"/>
          <span className="form__input-error"></span>
        </label>
        <label className="form__field">
          <input type="text" name="job" className="form__input-text input-profile-job" required minLength="2" maxLength="200" autoComplete="off"/>
          <span className="form__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input type="text" placeholder="Название" name="name" className="form__input-text input-card-title" required minLength="1" maxLength="30" autoComplete="off"/>
          <span className="form__input-error"></span>
        </label>
        <label className="form__field">
          <input type="url" placeholder="Ссылка на картинку" name="link" className="form__input-text input-card-img" required autoComplete="off"/>
          <span className="form__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithImage card={selectedCard} onClose={closeAllPopups} />
    </div>

  );
}

export default App;
