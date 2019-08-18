import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import { InputWithCheck } from './InputWithCheck';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';

export const SingleInput = (props) => {
    var component = props.partData[2];
    var isNeedValidateMassege = false;
    var inputComponent = null;

    const handleInput = (e) => {
        var correctValue = e.target.value;

        if (component === "Calendar") {
            correctValue = correctValue.getDate() + "." + correctValue.getMonth() + "." + correctValue.getFullYear();
        }
        if (component === "Dropdown") {
            correctValue = `${correctValue.option}`;
        }

        props.setData({
            ...props.data,
            [e.target.name] : correctValue
        });
    };

    const attributes = {className: "", name: props.partData[0], onChange: handleInput, value: props.data[props.partData[0]]};

    if (component === "Dropdown") {
        attributes.value = {option: props.data[props.partData[0]]};
    }

    if ( props.wasReqNextPage ) {
        if ( !attributes.value ) {
            attributes.className =  "p-error";
            isNeedValidateMassege = true;
        } 
    } 

    const validateMassege = () => {
        if ( isNeedValidateMassege ) {
            return (
                
                <span className="validate">Обов'язково заповніть це поле</span>
                
            )
        }
        return null;
    }

    if ( component === "InputText" || component === "InputTextarea")  {
        inputComponent = <InputText {...attributes}/>
    }
    if ( component === "InputTextarea")  {
        inputComponent = <InputTextarea {...attributes} autoResize={true}/>
    }
    if ( component === "Calendar" )  {
        inputComponent = <Calendar {...attributes} dateFormat="dd/mm/yy" monthNavigator={true} yearNavigator={true} yearRange="1900:2020" />
    }
    if ( component === "Dropdown" )  {
        inputComponent = <Dropdown {...attributes} options={props.partData[3]} optionLabel="option"/>
    }
    if ( component === "inputWithCheck") {
        return (
            <InputWithCheck 
                couple={props.partData[0]} 
                data={props.data} setData={props.setData} 
                wasReqNextPage={props.wasReqNextPage}
            />
        )
    }
    

    return (
        <div >
            <div className="p-grid p-fluid">
                <div className="p-col-3">
                    <div className="p-grid  p-justify-end">
                        <div className="p-grid  ">
                            <div className="p-col">
                                <h4 >{props.partData[1]}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-8">
                    <div className="p-col">
                        {inputComponent}
                        {validateMassege()}
                    </div>
                </div>
            </div>
        </div>
    );
};
