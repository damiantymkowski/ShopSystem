import React from 'react';
import Header from './Header';
import { useForm, ErrorMessage } from 'react-hook-form'
import Footer from "./Footer";

function Register() {
    const { handleSubmit, register, errors } = useForm({
        mode: "onChange"
    });
    const onSubmit = data => { console.log(data) }

    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <div className="registerBox">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Zarejestruj się, aby mieć dostęp do wszystkich funkcjonalności naszego sklepu.</p>
                    <input name="login"  type="text" placeholder="Login" ref={register({ required: true })}/>
                        <ErrorMessage errors={errors} name="login" message="Nie wpisano loginu" />
                    <input name="password" type="password" placeholder="Hasło" ref={register({ required: true})}/>
                        <ErrorMessage errors={errors} name="password" message="Nie wpisano hasła" />
                     <input name="mail" type="text" placeholder="E-mail" ref={register({ required: true, pattern: /^\S+@\S+$/i})}/>
                        <ErrorMessage errors={errors} name="mail" message="Nieprawidłowy email" />
                    <button className="registerBox__button">Zarejestruj się</button>


                    </form>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Register;
