import React from "react";

function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className="popup__container popup__container_type_form">
        <form onSubmit={props.onSubmit} action="" name="form-profile" className={`form form_type_${props.name}`} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <input type="submit" className="form__submit" value="Сохранить"/>
        </form>
        <button className="popup__close-btn" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;