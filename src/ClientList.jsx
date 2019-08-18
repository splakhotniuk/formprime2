import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export const ClientList = (props) => {
    console.log("Пропсы List", props);
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const dataRow = {
                    surname: "Прізвище",
                    name: "Ім'я",
                    patronymic: "По батькові", 
                    birthday: "Дата народження",
                    gender: "Стать", 
                    passportSeries: "Паспорт серія", 
                    passportNumber: "Паспорт номер", 
                    passportIssuer: "Ким видаий", 
                    passportDate: "Дата видачі",
                    ipn: "ІПН",
                    regAddress: "Адреса реєстрації", 
                    localAddress: "Фактична адреса"
  }

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
                                <>
                                
                                    <div className="p-sm-2">{`${dataRow[key]}: `}</div>
                                    <div className="p-sm-10" style={{fontWeight:'bold'}}>{`${data[key]}`}</div>
                                
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
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
        </div>
    );
};