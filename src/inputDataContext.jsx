 /**
  * Used for current client data transfer
  * When going througt a router
  * Returrn function whose result depends from params
  */
 import React from 'react';
    const inputDataTemplate = {
        surname: '',
        name: '',
        patronymic: '', 
        birthday: '', 
        gender: '', 
        passportSeries: '',
        passportNumber: '', 
        passportIssuer: '', 
        passportDate: '', 
        ipn: '', 
        noIpn: false, 
        regAddress: '', 
        localAddress: '', 
        isLiveRegAddress: false
    };
    var inputData = inputDataTemplate;
console.log('В КОНТЕКСТЕ')
    export const DataContext = React.createContext(
        (props) => {
            if ( !props ) { // if no params return current context data
                return inputData;
            } 
            if ( props === 'reset' ) { // if this param, then no some return, but zeroing current context values
                inputData = inputDataTemplate;
            } else { // if param is some client data, set it as current context data
                inputData = props;
            }
        }
    );
