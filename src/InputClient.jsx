/**
 * This component is used for input and changes of client data
 * Gets initial data from inputDataContext - blank template or compleed template(if data is changing)
 * Return all time some page with relevant content and navigation buttons
 */
import React from 'react';
import {useState, useContext} from 'react';
import { NavigationButtons } from './NavigationButtons';
import { AllData } from './AllData';
import { SingleInput } from './SingleInput';
import inputPage from './inputPage'; // array of templates for every page
import {DataContext} from './inputDataContext';

export const InputClient = () => {
    console.log('КОНТЕКСТ :::::::::::::', DataContext);
    const _dataContext = useContext(DataContext);
    const dataContext = _dataContext();
    const [data, setData] = useState(dataContext);
    const [pageNumber, setPageNumber] = useState(0);
    const [isReqNextPage, setIsReqNextPage] = useState(false);
    const [wasReqNextPage, setWasReqNextPage ] = useState(false);
    const [isReqPrevPage, setIsReqPrevPage] = useState(false);
    
    const page = inputPage[pageNumber]; // template of every page
    
    /**
     * @changeMessage {string} message for user about client data changing
     * while inputing new client, it is empty
     */
    var changeMessage = '';

    if ( data._id ) {
        /**
         * if client data has already '_id', this means we are in data change mode
         */
        var isNeedChangMessage = true;
        changeMessage = `Заміна даних клієнта: ${dataContext.surname} ${dataContext.name} ${dataContext.patronymic}`
        console.log(`Заміна даних клієнта: ${changeMessage}`)
    }

    const renderChangeMessage = () => {
        if ( isNeedChangMessage ) {
            return (
                <div className='warning p-col-12'>
                    <span>{changeMessage}</span>
                </div>
            )
        }
    }
    
    if ( isReqNextPage && pageNumber < 4 ) {
        /**
         * controlInputArray is used for validation
         */
        const controlInputArray = page.map(partData => ( 
            typeof partData[0] === 'object' ? data[partData[0][0][0]] || data[partData[0][1][0]] : data[partData[0]]
        ));
        
        setWasReqNextPage(true);

        if ( !controlInputArray.some(elem => !elem)) {
            /**
             * if some element is not yet filled, then next page is not possible
             */
            setIsReqNextPage(false);
            setWasReqNextPage(false);
            setPageNumber(pageNumber+1);
        } else {
            setIsReqNextPage(false);
        }
    }

    /**
     * conditions for going to the previous page
     */
    if ( isReqPrevPage && pageNumber > 0 ) {
        setIsReqNextPage(false);
        setWasReqNextPage(false);
        setIsReqPrevPage(false);
        setPageNumber(pageNumber-1);
    }

    /**
     * rendering desired page
     */
    const renderPage = () => {
        if ( pageNumber === 4 ) {
        /**
         * to view data page
         */
            return (
                <div>
                    <AllData data={data} setPageNumber={setPageNumber} changeMessage={changeMessage}/>
                </div> 
            )
        }
        return ( // to input page containing array of single fields to fill
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
        <div className='container'>
            {renderChangeMessage()}
            {console.log('DATA::::::::::::::::::::', data)}
            {renderPage()}
            <NavigationButtons setIsReqNextPage = {setIsReqNextPage} setIsReqPrevPage={setIsReqPrevPage}/>
        </div>
    );
};