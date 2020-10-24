(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),i=(a(15),a(9)),s=a(1),l=a(6),u=a.n(l);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("a",{href:"#",className:"header__main-page-link"},o.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"})))},f=a(7),p=a(8),_=new(function(){function e(t){var a=t.apiUrl,n=t.token,o=t.cohort;Object(f.a)(this,e),this._apiUrl=a,this._token=n,this._cohort=o}return Object(p.a)(e,[{key:"getUser",value:function(){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0430! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"_setLike",value:function(e){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041b\u0430\u0439\u043a \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"_unsetLike",value:function(e){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041b\u0430\u0439\u043a \u043d\u0435 \u0443\u0434\u0430\u043b\u0435\u043d! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._unsetLike(e):this._setLike(e)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._apiUrl,"/v1/").concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return e.ok?e.json():Promise.reject("\u0410\u0432\u0430\u0442\u0430\u0440 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d! \u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(e.status,", ").concat(e.statusText))}))}}]),e}())({apiUrl:"https://mesto.nomoreparties.co",token:"4214e0e0-c45a-4fb1-b86b-b162195f7419",cohort:"cohort-15"}),h=o.a.createContext();var d=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,r=o.a.useContext(h),i=t.owner._id===r._id,s="element__trash ".concat(i?"element__trash_visible":"element__trash_hidden"),l=t.likes.some((function(e){return e._id===r._id})),u="like__btn ".concat(l?"like__btn_status_active":"like__btn_status_inactive");return o.a.createElement("li",{className:"elements__item element"},o.a.createElement("div",{className:"element__img-container",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){a(t)}}),o.a.createElement("button",{className:s,onClick:function(){c(t)}}),o.a.createElement("div",{className:"element__info"},o.a.createElement("h2",{className:"element__title"},t.name),o.a.createElement("div",{className:"element__like like"},o.a.createElement("button",{className:u,onClick:function(){n(t)}}),o.a.createElement("span",{className:"like__counter"},t.likes.length))))};var v=function(e){var t=o.a.useContext(h);return o.a.createElement("main",null,o.a.createElement("section",{className:"profile"},o.a.createElement("button",{className:"profile__avatar",style:{backgroundImage:"url(".concat(e.avatar||t.avatar,")")},onClick:e.onEditAvatar}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__title"},t.name),o.a.createElement("button",{className:"profile__edit-btn",onClick:e.onEditProfile}),o.a.createElement("p",{className:"profile__subtitle"},t.about)),o.a.createElement("button",{className:"profile__add-btn",onClick:e.onAddPlace})),o.a.createElement("ul",{className:"elements"},e.cards.map((function(t){return o.a.createElement(d,{card:t,key:t._id,onCardClick:e.onCardClick,onCardLike:e.handleCardLike,onCardDelete:e.handleCardDelete})}))))};var E=function(){return o.a.createElement("footer",{className:"footer"},"\xa9 2020 Mesto Russia")};var k=function(e){return o.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen)},o.a.createElement("div",{className:"popup__container popup__container_type_form"},o.a.createElement("form",{onSubmit:e.onSubmit,action:"",name:"form-profile",className:"form form_type_".concat(e.name),noValidate:!0},o.a.createElement("h2",{className:"form__title"},e.title),e.children,o.a.createElement("input",{type:"submit",className:"form__submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})),o.a.createElement("button",{className:"popup__close-btn",onClick:e.onClose})))};var b=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup popup_type_img ".concat(t&&"popup_show")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("div",{className:"popup__img-container"},o.a.createElement("img",{alt:"",className:"popup__img",src:"".concat(t&&t.link)})),o.a.createElement("button",{className:"popup__close-btn",onClick:a}),o.a.createElement("p",{className:"popup__img-title"})))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,c=o.a.useState("ee"),r=Object(s.a)(c,2),i=r[0],l=r[1],u=o.a.useState("ee"),m=Object(s.a)(u,2),f=m[0],p=m[1],_=o.a.useContext(h);return o.a.useEffect((function(){l(_.name),p(_.about)}),[_]),o.a.createElement(k,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:f})}},o.a.createElement("label",{className:"form__field"},o.a.createElement("input",{type:"text",value:i||"",onChange:function(e){l(e.target.value)},placeholder:"\u0418\u043c\u044f",name:"name",className:"form__input-text input-profile-name",required:!0,minLength:"2",maxLength:"40",autoComplete:"off"}),o.a.createElement("span",{className:"form__input-error"})),o.a.createElement("label",{className:"form__field"},o.a.createElement("input",{type:"text",value:f||"",onChange:function(e){p(e.target.value)},placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",name:"job",className:"form__input-text input-profile-job",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),o.a.createElement("span",{className:"form__input-error"})))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,c=o.a.useRef();return o.a.createElement(k,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:c.current.value})}},o.a.createElement("label",{className:"form__field"},o.a.createElement("input",{type:"url",ref:c,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"link",className:"form__input-text input-avatar-img",required:!0,autoComplete:"off"}),o.a.createElement("span",{className:"form__input-error"})))};var g=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,c=o.a.useState(""),r=Object(s.a)(c,2),i=r[0],l=r[1],u=o.a.useState(""),m=Object(s.a)(u,2),f=m[0],p=m[1];return o.a.createElement(k,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"card",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:f})}},o.a.createElement("label",{className:"form__field"},o.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",className:"form__input-text input-card-title",required:!0,minLength:"1",maxLength:"30",autoComplete:"off"}),o.a.createElement("span",{className:"form__input-error"})),o.a.createElement("label",{className:"form__field"},o.a.createElement("input",{type:"url",value:f,onChange:function(e){p(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",className:"form__input-text input-card-img",required:!0,autoComplete:"off"}),o.a.createElement("span",{className:"form__input-error"})))};var j=function(e){var t=o.a.useState({}),a=Object(s.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),l=Object(s.a)(r,2),u=l[0],f=l[1],p=o.a.useState([]),d=Object(s.a)(p,2),k=d[0],j=d[1],y=o.a.useState(""),O=Object(s.a)(y,2),x=O[0],S=O[1],P=o.a.useState(""),U=Object(s.a)(P,2),L=U[0],T=U[1],w=o.a.useState(""),A=Object(s.a)(w,2),D=A[0],z=A[1],q=o.a.useState(),I=Object(s.a)(q,2),J=I[0],M=I[1];function R(){z(""),S(""),T(""),M(void 0)}return o.a.useEffect((function(){_.getUser().then((function(e){c(e)})).catch((function(e){console.error(e)}))}),[]),o.a.useEffect((function(){_.getInitialCards().then((function(e){j(e)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(h.Provider,{value:n},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(v,{onEditProfile:function(){S("popup_show")},onAddPlace:function(){T("popup_show")},onEditAvatar:function(){z("popup_show")},onCardClick:function(e){M(e)},avatar:u,cards:k,handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));_.changeLikeCardStatus(e._id,t).then((function(t){var a=k.map((function(a){return a._id===e._id?t:a}));j(a)})).catch((function(e){console.error(e)}))},handleCardDelete:function(e){_.deleteCard(e._id).then((function(){var t=k.filter((function(t){return t._id!==e._id}));j(t)})).catch((function(e){console.error(e)}))}}),o.a.createElement(E,null),o.a.createElement(N,{isOpen:D,onClose:R,onUpdateAvatar:function(e){var t=e.avatar;_.setAvatar(t).then((function(e){f(e.avatar),R()})).catch((function(e){console.error(e)}))}}),o.a.createElement(C,{isOpen:x,onClose:R,onUpdateUser:function(e){var t=e.name,a=e.about;_.editProfile(t,a).then((function(e){c(e),R()})).catch((function(e){console.error(e)}))}}),o.a.createElement(g,{isOpen:L,onClose:R,onAddPlace:function(e){var t=e.name,a=e.link;_.addCard(t,a).then((function(e){j([e].concat(Object(i.a)(k))),console.log(e)})).catch((function(e){console.error(e)}))}}),o.a.createElement(b,{card:J,onClose:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.94cbab21.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.a191d0ca.chunk.js.map