import React from 'react';

function ImagePopup({card, onClose}){

  return (
    <div className={`popup popup_type_img ${card && 'popup_show'}`}>
      <div className="popup__container">
        <div className="popup__img-container">
          <img alt="" className="popup__img" src={`${card && card.link}`}/>
        </div>
        <button className="popup__close-btn" onClick={onClose}></button>
        <p className="popup__img-title"></p>
      </div>
    </div>
  );

}

export default ImagePopup;