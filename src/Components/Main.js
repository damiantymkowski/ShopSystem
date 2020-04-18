import React from 'react';
import Header from './Header';
import jadalnia from '../jadalnia.png';
import kuchnia from '../kuchnia.png';
import lazienka from '../lazienka.png';
import salon from '../salon.png';
import komoda from '../komoda.png';
import krzeslo from '../krzeslo.png';
import sofa from '../sofa.jpg';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Main() {
    const newProduct = {
        pathname: "/product/krzeslo",
        param1: "Opis"
    };
    return (
        <React.Fragment>
            <div className="container">
        <Header/>

        <div className="categoryDesc">
            <p>Wybierz wnętrze, które chcesz umeblować!</p>
            <p>Nasz szeroki asortyment, na pewno spełni Twoje oczekiwania</p>
        </div>

        <div className="category">
        <div className="category__img"><div className="category__img--name">Jadalnia</div> <img src={jadalnia}/></div>
        <div className="category__img"><div className="category__img--name">Kuchnia</div><img src={kuchnia}/></div>
        <div className="category__img"><div className="category__img--name">Łazienka</div><img src={lazienka}/></div>
        <div className="category__img"><div className="category__img--name">Salon</div><img src={salon}/></div>
        </div>
                <div className="categoryDesc">
                    <p>Oto nasze produkty</p>
                    <p>Wybierz, to co Ci odpowiada</p>
                </div>
         <div className="products">
             <Link to={{pathname:'/product/fotel-halex', query: {title: "Fotel Halex", desc: "Nowoczesny fotel Halex to gwarancja jakości na długie lata! Krzesło idealnie pasuje zarówno do stołu nowoczesnego jak i klasycznego, Fotel będzie idealną ozdobą każdej sypialni, Hoker najlepiej w wersji XL pozwoli na relax przy barze z filiżanką ulubionej herbaty.", price:"24,99zł", size:"300cm", weight:"50kg", img:"https://i.imgur.com/0EUcZny.png"}}}><div className="products__block"><div className="products__moreInfo">Fotel Halex 24,99zł</div> <img src={krzeslo}/></div></Link>
             <Link to={{pathname:'/product/komoda-queen', query: {title: "Komoda Queen", desc: "Asymetryczna komoda z czarnym szkłem komoda czarny wysoki połysk mała komoda z czarnymi wstawkami szkła", price:"123,99zł", size:"600cm", weight:"76kg", img:"https://i.imgur.com/CHpBb28.png" }}}><div className="products__block"><div className="products__moreInfo">Komoda Queen 123,99zł</div><img src={komoda}/></div></Link>
            <Link to={{pathname:'/product/fotel-henry', query: {title: "Fotel Henry", desc: "Fotel Henry postawiony w salonie wniesie do niego ciepły i przytulny akcent oraz mnóstwo uroku. Komfortowe siedzisko i oparcie wypełnione wkładem z pianki wysokoelastycznej gwarantują wysoką jakość wypoczynku. Szeroka gama tkanin, a także możliwość wyboru wybarwienia drewnianych nóżek stwarzają mnóstwo możliwości aranżacyjnych.", price:"1999,99zł", size:"300cm", weight:"50kg", img:"https://i.imgur.com/Lk78k4s.jpg"}}}><div className="products__block"><div className="products__moreInfo">Fotel Henry 1999,99zł</div><img src={sofa}/></div></Link>
         </div>
            </div>
<Footer/>
        </React.Fragment>

    );
}

export default Main;
