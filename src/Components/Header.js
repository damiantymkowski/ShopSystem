import React from 'react';
import logo from '../logo.svg';
import baner from '../baner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <React.Fragment>
            <header className="header">
            <a href="/"><div className="header__logo"><img src={logo}/></div></a>
                <div className="search"><input className="search__input" type="text" placeholder="Jakich mebli szukasz?"/></div>
               <div className="header__icons"><a href="/login"><FontAwesomeIcon icon={faUser}/></a><FontAwesomeIcon icon={faHeart} /><a href="/cart"><FontAwesomeIcon icon={faShoppingCart}/></a></div>
                <div className="header__navigation">
                    <ul className="navigation">
                    <li className="navigation__item">Sypialnia</li>
                   <li className="navigation__item">Kuchnia</li>
                    <li className="navigation__item">Jadalnia</li>
                    <li className="navigation__item">Wyposażenie wnętrz</li>
                    <li className="navigation__item">Oświetlenie</li>
                    <li className="navigation__item">Akcesoria</li>
                    <li className="navigation__item">Promocje</li>
                     <li className="navigation__item ">Kontakt</li>
                    </ul>
                </div>
                <div className="slider">
                    <img src={baner}/>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
