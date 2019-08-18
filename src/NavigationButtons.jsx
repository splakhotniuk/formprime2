import React from 'react';
import {Button} from 'primereact/button';

export const NavigationButtons = (props) => {
    
    return (
      <div className="p-grid  p-justify-center">
          <Button label="Назад" className="p-button-secondary" onClick={() => props.setIsReqPrevPage(true)} />
          <Button label="Далі" className="p-button-success" onClick={() => props.setIsReqNextPage(true)} />
      </div>
    );
};