import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="form__field">
        <input type="url" ref={avatarRef} placeholder="Ссылка на аватар" name="link" className="form__input-text input-avatar-img" required autoComplete="off"/>
        <span className="form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;