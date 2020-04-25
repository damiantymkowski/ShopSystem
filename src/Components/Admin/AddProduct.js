import React, {useEffect} from 'react';
import logo from "../../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";
import AdminMenu from "./AdminMenu";
function AddProduct(){

    useEffect(() => {
        const editorButtons = document.getElementsByClassName('editor__menu--button');
        const setHtmlAttribute = (element) =>{
            document.execCommand(element.dataset.attribute,false);
        }
        for(let i=0; i<editorButtons.length; i++){
             editorButtons[i].addEventListener('click',function(){
             setHtmlAttribute(this);
            });
        }
    }, []);

    return(
        <React.Fragment>
            <div className="adminHeader">Dodawanie produktu <img src={logo}/> Panel Administratora</div>
            <div className="container">
                <div className="addProduct">
                    <div className="addProduct__image">
                        <FontAwesomeIcon icon={faCamera}/>Wybierz zdjęcie z dysku do dodania<p>Zalecany format 800 x 800px</p>
                        <label htmlFor="addProduct__image--upload" className="addProduct__image--upload">
                            Kliknij, aby dodać
                        </label>
                        <input id="addProduct__image--upload" type="file"/>
                    </div>
                    <div className="addProduct__info">
                        <div><p>Nazwa produktu:</p><input type="text"/></div>
                        <div><p>Liczba sztuk: </p><input type="text"/></div>
                        <div><p>Cena: </p><input type="text"/></div>
                        <div><p>Kategoria: </p><input type="text"/></div>
                    </div>
                    <div class="editor">
                        <div class="editor__menu">
                            <button class="editor__menu--button" data-attribute="bold">Pogrubienie</button>
                            <button className="editor__menu--button" data-attribute="italic">Kursywa</button>
                            <button className="editor__menu--button" data-attribute="underline">Podkreślenie</button>
                        </div>
                        <div class="editor__canvas" id="canvas" contentEditable></div>
                    </div>
                    <button className="addProduct__btn">Dodaj produkt</button>
                </div>
            </div>
        <AdminMenu/>
            <Footer/>
        </React.Fragment>
    );
}

export default AddProduct;