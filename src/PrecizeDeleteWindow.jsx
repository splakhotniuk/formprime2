import React from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import axios from 'axios'

export const PrecizeDeleteWindow = (props) => {
    const deleteClient = () => {axios.delete(`/api/questionary/${props.currentClient._id}`)
                                    .then( 
                                        (response) => {
                                            console.log('Removed from server ', response);

                                        }
                                    );
                                    props.setIsPrecizeDeleteWindow(false);
                                }
    
    const footer =                                 
                <div>
                    <Button label='Так' className='p-button-danger' onClick={() => {deleteClient()}}/>
                    <Button label='Ні ' className='p-button-secondary' onClick={()=>props.setIsPrecizeDeleteWindow(false)}/>
                </div>;

    return (
        <div className='content-section implementation'>
            <Dialog header='УВАГА!!!' visible={true} style={{width: '50vw'}} footer={footer} onHide={()=>props.setIsPrecizeDeleteWindow(false)}>
                <div className='p-grid p-justify-center'>
                    <div className='p-col-12'>
                        <h2>Ви дійсно хочете видалити клієнта:</h2>
                        <p>{`${props.currentClient.surname} ${props.currentClient.name} ${props.currentClient.patronymic} ???`}</p>
                    </div>
                </div>
            </Dialog>
        </div>
    )
};