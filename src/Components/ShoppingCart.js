import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ShoppingCart() {
    return (
        <React.Fragment>
<div className="container">
<Header/>
<div className="shoppingCart">
<h3>Lista Twoich produktów: </h3>
    <div className="shoppingCart__product">
<p>Nazwa_produktu</p><p>Cena: 30zł</p><p>Ilość:</p><input className="shoppingCart__productQnt" placeholder="1" type="number"/>
    </div>
    <button className="shoppingCart__buyBtn">Dokonaj zakupu</button>
</div>
</div>
            <Footer/>
        </React.Fragment>
    );
}

export default ShoppingCart;
