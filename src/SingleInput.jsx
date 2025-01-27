/**
 * This component renders input fields with correct attributes
 */
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
            correctValue = correctValue.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'});
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
    /**
     * Check if input has value before coming to next page
     */
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

    if ( component === "InputText")  {
        inputComponent = <InputText {...attributes}/>
    }
    if ( component === "InputTextarea")  {
        inputComponent = <InputTextarea {...attributes} autoResize={true}/>
    }
    if ( component === "Calendar" )  {
        if ( attributes.value ) {
            var dateString = props.data[props.partData[0]];
            attributes.value = new Date(dateString.substr(6, 4), dateString.substr(3, 2)-1, dateString.substr(0, 2));
        }

        inputComponent = <Calendar {...attributes} dateFormat="dd/mm/yy" monthNavigator={true} yearNavigator={true} yearRange="1900:2020" />
    }
    if ( component === "Dropdown" )  {
        attributes.value = {option: props.data[props.partData[0]]};
        inputComponent = <Dropdown {...attributes} options={props.partData[3]} optionLabel="option"/>
    }
    if ( component === "inputWithCheck") {
        /**
         * Input with checkbox is own component
         * In all other cases we use PrimeReact components
         */
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
                <div className="p-col-1"></div>
                <div className="p-col-3">
                    <div className="p-grid  p-justify-end">
                        <div className="p-grid  ">
                            <div className="p-col">
                                <p >{props.partData[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-7">
                    <div className="p-col">
                        {inputComponent}
                        {validateMassege()}
                    </div>
                </div>
                <div className="p-col-1"></div>
            </div>
        </div>
    );
};
