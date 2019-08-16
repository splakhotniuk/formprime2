import React from 'react';
import {useState, useEffect} from 'react';
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
    const[isNextPagePossible, setIsNextPagePossible] = useState(false);
    const[isReqNextPage, setIsReqNextPage] = useState(false);

    const renderPage = () => {
        if ( pageNumber === 4 ) {
            return (
                <div>
                    <AllData data={data} setData={setData}/>
                </div> 
            )
        }
        return (
            <div className="container">
                {
                    inputPage[pageNumber].map(partData => <SingleInput 
                                                            data={data} 
                                                            setData={setData} 
                                                            partData={partData} 
                                                            isReqNextPage={isReqNextPage}
                                                            setIsReqNextPage={setIsReqNextPage}
                                                            isNextPagePossible={isNextPagePossible}
                                                            setIsNextPagePossible={setIsNextPagePossible} 
                                                            key={partData[0]}
                                                        />)
                }
            </div>
        )
    }

    const resetPageState = () => {
        setIsNextPagePossible(false);
        setIsReqNextPage(false);
    }

    useEffect(resetPageState, [pageNumber]);

    return (
        <div>
            {console.log(data)}
            {renderPage()}
            <NavigationButtons 
                pageNumber={pageNumber} 
                setPageNumber={setPageNumber} 
                isNextPagePossible = {isNextPagePossible} 
                setIsNextPagePossible = {setIsNextPagePossible}
                isReqNextPage = {isReqNextPage}
                setIsReqNextPage = {setIsReqNextPage}
            />
        </div>
    );
};