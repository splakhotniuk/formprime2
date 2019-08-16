import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import { InputWithCheck } from './InputWithCheck';
import {Dropdown} from 'primereact/dropdown';

export const SingleInput = (props) => {
    var component = props.partData[2];
    var isNeedValidateMassege = false;

    const handleInput = (e) => {
        props.setData({
            ...props.data,
            [e.target.name] : e.target.value
        });
    };

    const attributes = {className: "", name: props.partData[0], onChange: handleInput, value: props.data[props.partData[0]]};

    if ( props.isReqNextPage ) {
        console.log("in isReqNextPage")
        if ( !attributes.value ) {
            attributes.className =  "p-error";
            props.setIsNextPagePossible(false);
            isNeedValidateMassege = true;
        } else {
            props.setIsNextPagePossible(true);
            //props.setIsReqNextPage(false);
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


    if ( component === "InputText" )  {
        component = <InputText {...attributes}/>
    }
    if ( component === "Calendar" )  {
        component = <Calendar {...attributes} monthNavigator={true} yearNavigator={true} yearRange="1900:2020" />
    }
    if ( component === "Dropdown" )  {
        component = <Dropdown {...attributes} options={props.partData[3]} optionLabel="option"/>
    }
    if ( component === "inputWithCheck") {
        return (
            <InputWithCheck 
                couple={props.partData[0]} 
                data={props.data} setData={props.setData} 
                isReqNextPage={props.isReqNextPage}
                setIsReqNextPage={props.setIsReqNextPage}
                isNextPagePossible={props.isNextPagePossible}
                setIsNextPagePossible={props.setIsNextPagePossible} 
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
                        {component}
                        {validateMassege()}
                      
                    </div>
                </div>
            </div>
        </div>
    );
};
