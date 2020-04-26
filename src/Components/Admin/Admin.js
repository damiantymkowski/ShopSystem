import React from 'react';
import logo from "../../logo.svg";
import AdminMenu from "./AdminMenu";
import Footer from "../Footer";

function Admin(){
    return(
        <React.Fragment>
            <div className="adminHeader">Logowanie <img src={logo}/> Panel Administratora</div>
            <div className={"container"}>
            <div className={"adminLogin"}>
                Login:
                <input type="text"/>
                Hasło:
                <input type="text"/>
                <button>Zaloguj się</button>
            </div>
                <i>Poniższe menu w tym miejscu jest tymczasowe</i>
            </div>

            <AdminMenu/>
            <Footer/>
        </React.Fragment>
    );
}

export default Admin;