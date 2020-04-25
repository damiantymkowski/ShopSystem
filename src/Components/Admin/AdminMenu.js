import React from 'react';
import { Link } from "react-router-dom";

function AdminMenu(){
    return(
        <React.Fragment>
            <div className="admin_menu">
            <Link to="/admin/orders">Zamówienia</Link>
            <Link to="/admin/addproduct">Dodaj produkt</Link>
            <Link to="/admin/adduser">Zarządzanie użytkownikami</Link>
            </div>
        </React.Fragment>
    );
}

export default AdminMenu;