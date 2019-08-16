import React from 'react';
import { Link } from "react-router-dom";
import {Button} from 'primereact/button';


export const StartPage = (props) => {
    return (
    <div >
        <h1>Ви бажаєте:</h1>
        <Link to="/inputclient"><Button label="Ввести нові дані" className="p-button-success"/></Link>
        <Link to="/clientslist"><Button label="Переглянути список всіх клієнтів" className="p-button-info"/></Link>
    </div>
    );
};