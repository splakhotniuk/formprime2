 import React from 'react';
    const inputDataTemplate = {
        _id: "",
        surname: "",
        name: "",
        patronymic: "", 
        birthday: "", 
        gender: "", 
        passportSeries: "",
        passportNumber: "", 
        passportIssuer: "", 
        passportDate: "", 
        ipn: "", 
        noIpn: false, 
        regAddress: "", 
        localAddress: "", 
        isLiveRegAddress: false
    };
    var inputData = inputDataTemplate;
console.log("В КОНТЕКСТЕ")
    export const DataContext = React.createContext(
        (props) => {
            if ( !props ) {
                return inputData;
            } 
            if ( props === "reset" ) {
                inputData = inputDataTemplate;
            } else {
                inputData = props;
            }
        }
    );
