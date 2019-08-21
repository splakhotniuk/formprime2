import React from 'react';
import {useState, useEffect, useContext} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import dataRow from './dataRow';
import {DataContext} from "./inputDataContext";

export const ClientList = (props) => {
    console.log("Пропсы List", props);
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const dataContext = useContext(DataContext);

  const fetchData = () => {
        axios.get("/api/questionary")
                .then(
                    (serverData) => {
                        console.log(`Server data = ${JSON.stringify(serverData.data)}`);
                        setData(serverData.data);
                    }
                )
    }

  useEffect(fetchData, [])

  const rowExpansionTemplate = (data) => {
      return (
        <div>
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        {
                            Object.keys(dataRow).map(key => (
                                <div className="p-col-12" key={key}>
                                    <div className="p-grid">
                                        <div className="p-sm-2">{`${dataRow[key]}: `}</div>
                                        <div className="p-sm-10" style={{fontWeight:'bold'}}>{`${data[key]}`}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Link to="/inputclient"><Button label="Змінити дані" className="p-button-warning" onClick={() => dataContext(data)}/></Link>
            <Button label="Видалити дані" className="p-button-danger" onClick={() => {
                axios.delete(`/api/questionary/${data._id}`)
                .then( 
                    (response) => {
                        console.log("Removed from server ", response);

                    }
                );}}/>
        </div>
    );
  }

    return (
        <div > 
            <div className="content-section implementation">
                <DataTable value={data}  expandedRows={expandedRows} onRowToggle={(e) => {setExpandedRows(e.data); console.log("ID Даного клиента",e.data)}}  rowExpansionTemplate={rowExpansionTemplate} dataKey="_id">
                    <Column expander={true} style={{width: '3em'}} />
                    <Column field="surname" header="Прізвище" />
                    <Column field="name" header="Імя" />
                    <Column field="patronymic" header="По батькові" />
                </DataTable>
            </div>
            <div className="p-col-12"></div>
            <div>
                <Link to="/"><Button label="<-- На стартову сторінку" className="p-button-secondary"/></Link>
            </div>
        </div>
    );
};