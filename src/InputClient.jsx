import React from 'react';
import {useState, useContext} from 'react';
import { NavigationButtons } from "./NavigationButtons";
import { AllData } from "./AllData";
import { SingleInput } from "./SingleInput";
import inputPage from "./inputPage";
import {DataContext} from "./inputDataContext";

export const InputClient = () => {
    console.log("КОНТЕКСТ :::::::::::::", DataContext);
    const _dataContext = useContext(DataContext);
    const dataContext = _dataContext();
    const [data, setData] = useState(dataContext);
    const [pageNumber, setPageNumber] = useState(0);
    const [isReqNextPage, setIsReqNextPage] = useState(false);
    const [wasReqNextPage, setWasReqNextPage ] = useState(false);
    const [isReqPrevPage, setIsReqPrevPage] = useState(false);
    
    const page = inputPage[pageNumber];
    var changeMessage = "";

    if ( data._id ) {
        var isNeedChangMessage = true;
        changeMessage = `Заміна даних клієнта: ${dataContext.surname} ${dataContext.name} ${dataContext.patronymic}`
        console.log(`Заміна даних клієнта: ${changeMessage}`)
    }

    const renderChangeMessage = () => {
        if ( isNeedChangMessage ) {
            return (
                <div className="warning p-col-12">
                    <span>{changeMessage}</span>
                </div>
            )
        }
    }
    
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
                    <AllData data={data} setPageNumber={setPageNumber} changeMessage={changeMessage}/>
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
            {renderChangeMessage()}
            {console.log("DATA::::::::::::::::::::", data)}
            {renderPage()}
            <NavigationButtons setIsReqNextPage = {setIsReqNextPage} setIsReqPrevPage={setIsReqPrevPage}/>
        </div>
    );
};