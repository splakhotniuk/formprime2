import React from 'react';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'primereact/button';
import {DataContext} from './inputDataContext';


export const StartPage = () => {
    const dataContext = useContext(DataContext);
    /**
     * Zeroing context data for could get empty template in ClientInput
     */
    dataContext('reset'); 

    return (
        <div >
            <h1>Ви бажаєте:</h1>
            <Link to='/inputclient'><Button label='Ввести нові дані' className='p-button-success'/></Link>
            <Link to='/clientslist'><Button label='Переглянути список всіх клієнтів' className='p-button-info'/></Link>
        </div>
    );
};