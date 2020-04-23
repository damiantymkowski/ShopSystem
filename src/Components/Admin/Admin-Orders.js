import React from 'react';
import logo from '../../logo.svg';
import Footer from '../Footer';
function Admin_Orders(){
    return(
<React.Fragment>
    <div className="admin_orders__bar">Przegląd zamówień <img src={logo}/> Panel Administratora</div>
    <div className={"container"}>
<div className="admin_orders">
    <div className="admin_orders__table">
<div className="admin_orders__table--title">ID</div><div className="admin_orders__table--title">Imię i Nazwisko</div><div className="admin_orders__table--title">Nowy klient</div><div className="admin_orders__table--title">Razem</div><div className="admin_orders__table--title">Płatność</div><div className="admin_orders__table--title">Data</div><div className="admin_orders__table--title">Wyświetlony</div>
<div>1</div><div>Jan Kowalski</div><div>Tak</div><div>32,99zł</div><div>Karta płatnicza</div><div>23-04-2020 14:21</div><div><p className="admin_orders__table--process">W realizacji</p></div>
        <div>1</div><div>Jan Kowalski</div><div>Tak</div><div>31,99zł</div><div>Karta płatnicza</div><div>21-04-2020 15:31</div><div><p className="admin_orders__table--process">W realizacji</p></div>
        <div>2</div><div>Barbara Kowalska</div><div>Nie</div><div>352,90zł</div><div>BLIK</div><div>20-04-2020 11:25</div><div><p className="admin_orders__table--waiting">W toku...</p></div>
        <div>3</div><div>Alicja Kowal</div><div>Tak</div><div>12,99zł</div><div>Przy odbiorze</div><div>19-04-2020 13:44</div><div><p className="admin_orders__table--canceled">Anulowane</p></div>
        <div>4</div><div>Mateusz Górski</div><div>Nie</div><div>42,99zł</div><div>BLIK</div><div>17-04-2020 11:24</div><div><p className="admin_orders__table--process">W realizacji</p></div>
        <div>5</div><div>Jan Nowak</div><div>Tak</div><div>52,39zł</div><div>Karta płatnicza</div><div>15-04-2020 05:17</div><div><p className="admin_orders__table--process">W realizacji</p></div>
        <div>6</div><div>Tadeusz Kawa</div><div>Tak</div><div>142,19zł</div><div>Przy odbiorze</div><div>12-04-2020 08:04</div><div><p className="admin_orders__table--canceled">Anulowane</p></div>

    </div>
</div>
    </div>
<Footer/>
</React.Fragment>
    );
}

export default Admin_Orders;

