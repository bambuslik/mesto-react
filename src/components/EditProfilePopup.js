import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState('ee');
  const [description, setDescription] = React.useState('ee');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="form__field">
        <input type="text" value={name || ''} onChange={handleChangeName} placeholder="Имя" name="name" className="form__input-text input-profile-name" required minLength="2" maxLength="40" autoComplete="off"/>
        <span className="form__input-error"></span>
      </label>
      <label className="form__field">
        <input type="text" value={description || ''} onChange={handleChangeDescription} placeholder="Занятие" name="job" className="form__input-text input-profile-job" required minLength="2" maxLength="200" autoComplete="off"/>
        <span className="form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;