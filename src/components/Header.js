import React from "react";
import logoPath from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__main-page-link"><img className="header__logo" src={logoPath} alt="Логотип Mesto Russia"/></a>
    </header>
  );
}

export default Header;