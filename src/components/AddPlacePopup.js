import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name,
      link
    });
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value)
  }


  return (
    <PopupWithForm title="Новое место" name="card" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="form__field">
        <input type="text" value={name} onChange={handleChangeName} placeholder="Название" name="name" className="form__input-text input-card-title" required minLength="1" maxLength="30" autoComplete="off"/>
        <span className="form__input-error"></span>
      </label>
      <label className="form__field">
        <input type="url" value={link} onChange={handleChangeLink} placeholder="Ссылка на картинку" name="link" className="form__input-text input-card-img" required autoComplete="off"/>
        <span className="form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;