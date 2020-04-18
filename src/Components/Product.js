import React from 'react';
import Header from './Header';
import Footer from "./Footer";

function Product(props) {

    return (
        <React.Fragment>
            <div className="container">
            <Header/>
            <div className="product">
              <h2 className="product__title">Aktualnie przeglądasz: {props.location.query.title}</h2>
                <img src={props.location.query.img}/>
                <div className="product__description">
                    {props.location.query.desc}
                </div>
               <table>
                   <tr>
                       <td>Cena: </td><td>{props.location.query.price}</td>
                   </tr>
                   <tr>
                       <td>Waga: </td><td>{props.location.query.weight}</td>
                   </tr>
                   <tr>
                       <td>Rozmiar: </td><td>{props.location.query.size}</td>
                   </tr>
               </table>
                <div className="product__buy">
                <button className="product__buyBtn">Kup teraz!</button><input type="number" className="product__buyQuantity"placeholder="1" id="quantity" name="quantity" min="1" max="10"/>
                </div>
            </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Product;
