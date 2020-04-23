import React, {useEffect} from 'react';
import Footer from "./Footer";
import Header from './Header';


function Order(){

    //Accordion
    const acc = document.getElementsByClassName("order__accordion");
    let i;

    useEffect(() => {
    for(i=0; i<acc.length;i++){

        acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

      let panel = this.nextElementSibling;
      if(panel.style.maxHeight)
          panel.style.maxHeight = null;
      else
          panel.style.maxHeight= panel.scrollHeight + "px";
    });
}
    }, []);


    return(
      <React.Fragment>

<div className={"container"}>
    <Header/>
    <div className={"order"}>
        <h2>Twoje zamówienie</h2>

        <button className="order__accordion">Dane osobowe</button>
        <div className="order__panel">

        <h4>Imię</h4>
        <input type="text"/>
        <h4>Nazwisko</h4>
        <input type="text"/>
        <h4>Telefon</h4>
        <input type="text"/>
        <h4>Adres-email</h4>
        <input type="text"/>

        </div>

        <button className="order__accordion">Adresy</button>
        <div className="order__panel">

        <h4>Ulica</h4>
        <input type="text"/>
        <h4>Kod pocztowy</h4>
        <input type="text"/>
        <h4>Miasto</h4>
        <input type="text"/>

        </div>

        <button className="order__accordion">Sposób płatności</button>
        <div className="order__panel">

            <h4>Ulica</h4>
            <input type="text"/>
            <h4>Kod pocztowy</h4>
            <input type="text"/>
            <h4>Miasto</h4>
            <input type="text"/>

        </div>

    </div>
</div>
<Footer/>
      </React.Fragment>
    );
}

export default Order;

