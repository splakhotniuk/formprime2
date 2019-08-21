import React from 'react';
import { Link } from "react-router-dom";
import {Button} from 'primereact/button';
import axios from 'axios'
import dataRow from './dataRow';
import {DialogWindow} from './DialogWindow';

export const AllData = (props) => {
    const renderDialogMessage = () => {
        if ( props.data._id ) {
            return (
                <DialogWindow data = {props.data} setPageNumber={props.setPageNumber} changeMessage={props.changeMessage}/>
            )
        } 
    }

    return (
        <div>
            {renderDialogMessage()}
            <div>
                {Object.keys(dataRow).map((key) => (
                    <div className="p-grid p-fluid" key={key}>
                        <div className="p-col-4">
                            <div className="p-grid  p-justify-end">
                                <div className="p-grid  ">
                                    <div className="p-col">
                                        <span>{`${dataRow[key]}: `}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-1"></div>
                        <div className="p-col-7">
                            <div className="p-grid  p-justify-start">
                                <div className="p-grid  ">
                                    <div className="p-col">
                                        <p> {`${props.data[key]}`} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-grid  p-justify-center">
                <div className="p-col-9"></div>
                <div className="p-col-3">
                    <Button label="Зберегти" className="p-button-warning" onClick={() => axios.post('/api/questionary', props.data)}/>
                    <Link to="/clientslist"><Button label="Переглянути список всіх клієнтів" className="p-button-info"/></Link>
                </div>
            </div>
        </div>
);
};
