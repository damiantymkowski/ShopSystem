import React from 'react';
import Header from './Header';
import {faDoorOpen, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ErrorMessage, useForm} from "react-hook-form";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Login() {
    const { handleSubmit, register, errors } = useForm({
        mode: "onChange"
    });
    const onSubmit = data => { console.log(data) }
    return (
        <React.Fragment>
            <div className="container">
            <Header/>
            <div className="loginBox">
                <form onSubmit={handleSubmit(onSubmit)}>
                <FontAwesomeIcon icon={faDoorOpen}/>
                <p>Zaloguj się, aby mieć dostęp do wszystkich funkcjonalności naszego sklepu.</p>
                    <p>Nie masz konta? <Link to="/register">Zarejestruj się!</Link></p>
                <p>Nazwa użytkownika:</p>
                <input type="text" name="login" placeholder="Tutaj wpisz swój nick"  ref={register({ required: true })}/>
                    <ErrorMessage errors={errors} name="login" message="Nie wpisano loginu" />
                <p> Hasło:</p>
                <input type="password" name="password" placeholder="Twoje bezpieczne hasło" ref={register({ required: true })}/>
                    <ErrorMessage errors={errors} name="password" message="Nie wpisano hasła" />
                <button className="loginBox__button">Zaloguj się!</button>
                </form>
            </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Login;
