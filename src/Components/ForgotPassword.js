import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {ErrorMessage} from "react-hook-form";

function ForgotPassword(){
    return(
        <React.Fragment>

<div className={"container"}>
    <Header/>
    <div className="loginBox">

            <p>Zapomniałeś hasła? Wpisz swój e-mail</p>
            <p>E-mail:</p>
            <input type="text"/>
            <button className="loginBox__button">Przypomnij hasło</button>

    </div>
</div>
        <Footer/>
        </React.Fragment>
    );
}

export default ForgotPassword;