import React from 'react';
import { SingleInput } from "./SingleInput"
import {Checkbox} from 'primereact/checkbox';

export const InputWithCheck = (props) => {
    var isChecked = props.data[props.couple[1][0]];

    const checkboxChange = (e) => {
        props.setData({
            ...props.data,
            [e.target.name] : !props.data[e.target.name]
        });
    }

    const renderInput = () => {
        if ( !isChecked ) {
            return (
                <div>
                    <SingleInput 
                        data={props.data} 
                        setData={props.setData} 
                        partData={props.couple[0]} 
                        isReqNextPage={props.isReqNextPage}
                        setIsReqNextPage={props.setIsReqNextPage}
                        isNextPagePossible={props.isNextPagePossible}
                        setIsNextPagePossible={props.setIsNextPagePossible}
                    />
                </div>
            )
        }
        props.data[props.couple[0][0]] = "";
        props.setIsNextPagePossible(true);
        return null;
    }

    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12"></div>
                <div className="p-col-3"></div>
                <div className="p-col-8">
                    <div className="p-grid p-justify-start ">
                        <div className="p-col-1">
                        <div className="p-grid p-justify-end ">
                            <Checkbox className="first" name={props.couple[1][0]} checked={isChecked} onChange={checkboxChange} value={isChecked}/>
                        </div>
                        </div>
                            <div className="p-col-5">
                                <div className="p-grid p-justify-start ">
                                    {props.couple[1][1]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {renderInput()}
        </div>
    )
    
   
        // if ( !isChecked ) {
        //     return (
        //         <div>
        //             <h1> Две строки</h1>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //             <h1> Одна строка </h1>
        //         </div>
        // )
   
    
   
};