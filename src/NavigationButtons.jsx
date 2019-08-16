import React from 'react';
import {Button} from 'primereact/button';

export const NavigationButtons = (props) => {
    const pageNumber = props.pageNumber;

    const changePageNumber = (diff) => {
      var nextPage = pageNumber + diff;
  
      if ( nextPage >= 0 && nextPage <= 4 ) {
        props.setPageNumber(nextPage); 
      }
    }

    const moveForvard = () => {
      props.setIsReqNextPage(true);
  
      if ( props.isNextPagePossible ) {
        changePageNumber(1);
        props.setIsReqNextPage(false); 
      }
    }

    const sendDatas = () => {
     // axios.post('/api/questionary', props.datas);
    }

    if ( pageNumber === 4 ) {
      return (
        <div className="p-grid  p-justify-center">
          <Button label="Назад" className="p-button-secondary" onClick={() => {changePageNumber(-1)}} />
          <Button label="Відправити" className="p-button-primary" onClick={() => sendDatas()} />
        </div>
      )
    }
    return (
      <div className="p-grid  p-justify-center">
          <Button label="Назад" className="p-button-secondary" onClick={() => {changePageNumber(-1)}} />
          <Button label="Далі" className="p-button-success" onClick={() => moveForvard()} />
      </div>
    );
};