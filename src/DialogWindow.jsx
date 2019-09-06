/**
 * Used, when we are changing client data
 * Rendered from AllData component
 */

import React from 'react';
import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'primereact/button';
import axios from 'axios'
import dataRow from './dataRow';
import {DataContext} from './inputDataContext';
import {Dialog} from 'primereact/dialog';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export const DialogWindow = (props) => {
    const _dataContext = useContext(DataContext);
    const dataContext = _dataContext();
    const [visible, setVisible] = useState(true);
    var header = '';
    var content ='';
    var footer = null;

    const toChanginFooter = 
                            <div>
                                <Button label='Так' className='p-button-primary' onClick={()=>props.setPageNumber(0)}/>
                                <Link to='/clientslist'><Button label='Ні ' className='p-button-secondary'/></Link>
                            </div>;

    if ( props.data === dataContext ) { // it means we went through all data and did not change anything
        header = 'ЗМІН НЕ ВИЯВЛЕНО';
        content = 
                <div className='p-grid p-justify-center'>
                    <div className='p-col-12'>
                        <h2>ЗМІН НЕ ВИЯВЛЕНО</h2>
                    </div>
                    <div className='p-col-12'>
                        <h1>ПОВЕРНУТИСЬ ДО ЗМІН?</h1>
                    </div>
                </div>
        footer = toChanginFooter;
    } else {
        const tabOfChanging = [];

        const addElem = (key) => {
            if ( props.data[key] !== dataContext[key] ) {
                tabOfChanging.push({partData: dataRow[key], oldData: dataContext[key], newData: props.data[key]})
            }
        };

        Object.keys(dataRow).map((key) => (addElem(key)));
        console.log(tabOfChanging);
        header = props.changeMessage;
        content = 
            <div className='content-section implementation'>
                <DataTable value={tabOfChanging}   dataKey='partData'>
                    <Column field='partData' header='Змінені дані'/>
                    <Column field='oldData' header='Було'/>
                    <Column field='newData' header='Стало'/>
                </DataTable>
                <p-col-12></p-col-12>
                <div className='p-grid p-justify-center'><h1>Змінити дані?</h1></div>
            </div>
        footer = <div>
                    <Link to='/clientslist'><Button label='Так' className='p-button-primary' onClick={()=>
                        axios.post(`/api/questionary/${props.data._id}`, props.data)
                        .then((res) => console.log('Was changed: ', res))}/></Link>

                    <Link to='/clientslist'><Button label='Ні ' className='p-button-secondary'/></Link>
                </div>
    }

    return (
        <div className='content-section implementation'>
            <Dialog header={header} visible={visible} style={{width: '50vw'}} footer={footer} onHide={()=>setVisible(false)}>
                {content}
            </Dialog>
        </div>
    )
};