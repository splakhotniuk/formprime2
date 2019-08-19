import React from 'react';
import {useState} from 'react';
import { NavigationButtons } from "./NavigationButtons";
import { AllData } from "./AllData";
import { SingleInput } from "./SingleInput"
import inputPage from "./inputPage"

export const InputClient = () => {
    
    const [data, setData] = useState({
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
      });

    const [pageNumber, setPageNumber] = useState(0);
    const [isReqNextPage, setIsReqNextPage] = useState(false);
    const [wasReqNextPage, setWasReqNextPage ] = useState(false);
    const [isReqPrevPage, setIsReqPrevPage] = useState(false)
    
    const page = inputPage[pageNumber];
    
    if ( isReqNextPage && pageNumber < 4 ) {
        const controlInputArray = page.map(partData => (
            typeof partData[0] === 'object' ? data[partData[0][0][0]] || data[partData[0][1][0]] : data[partData[0]]
        ));
        
        setWasReqNextPage(true);

        if ( !controlInputArray.some(elem => !elem)) {
            setIsReqNextPage(false);
            setWasReqNextPage(false);
            setPageNumber(pageNumber+1);
        } else {
            setIsReqNextPage(false);
        }
    }
    if ( isReqPrevPage && pageNumber > 0 ) {
        setIsReqNextPage(false);
        setWasReqNextPage(false);
        setIsReqPrevPage(false);
        setPageNumber(pageNumber-1);
    }

    const renderPage = () => {
        if ( pageNumber === 4 ) {
            return (
                <div>
                    <AllData data={data}/>
                </div> 
            )
        }
        return (
            <div >
                {
                    page.map(partData => <SingleInput 
                                                    data={data} 
                                                    setData={setData} 
                                                    partData={partData} 
                                                    wasReqNextPage={wasReqNextPage}
                                                    key={partData[0]}
                                                    />)
                }
            </div>
        )
    }

    return (
        <div className="container">
            
            {renderPage()}
            <NavigationButtons setIsReqNextPage = {setIsReqNextPage} setIsReqPrevPage={setIsReqPrevPage}/>
        </div>
    );
};