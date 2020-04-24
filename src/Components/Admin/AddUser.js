import React from 'react';
import logo from "../../logo.svg";
import Footer from "../Footer";

function AddUser(){
    return(
        <React.Fragment>
        <div className="adminHeader">Przegląd pracowników <img src={logo}/> Panel Administratora</div>
        <div className={"container"}>
            <div className="admin_users">
                <div className="admin_users__table">
                    <div className="admin_users__table--title">ID</div><div className="admin_users__table--title">Imię i Nazwisko</div><div className="admin_users__table--title">Stanowisko</div><div className="admin_users__table--title">Usuń</div><div className="admin_users__table--title">Zablokuj</div>
                    <div>1</div><div>Jan Kowalski</div><div>Tak</div><div><p className="admin_users__table--btn">u</p></div><div><p className="admin_users__table--btn">z</p></div>
                    <div>1</div><div>Jan Kowalski</div><div>Tak</div><div><p className="admin_users__table--btn">u</p></div><div><p className="admin_users__table--btn">z</p></div>
                    <div>1</div><div>Jan Kowalski</div><div>Tak</div><div><p className="admin_users__table--btn">u</p></div><div><p className="admin_users__table--btn">z</p></div>
                </div>
                <div className="admin_users__table">
                    <div className="admin_users__table--title">Dodaj</div><div className="admin_users__table--title">Imię i Nazwisko</div><div className="admin_users__table--title">Stanowisko</div><div className="admin_users__table--title"></div><div className="admin_users__table--title"></div>
                    <div><p className="admin_users__table--btn">d</p></div><div><input type="text"/></div><div><select>
                    <option value="0">Stanowisko</option>
                    <option value="1">Sprzedawca</option>
                    <option value="2">Admin</option>
                </select></div><div></div><div></div>

                </div>
            </div>
        </div>
            <Footer/>
        </React.Fragment>
    );
}

export default  AddUser;