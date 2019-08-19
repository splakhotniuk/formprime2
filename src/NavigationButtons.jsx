import React from 'react';
import {Button} from 'primereact/button';
import { Link } from "react-router-dom";

export const NavigationButtons = (props) => {
    
    return (
      <div className="p-grid">
        <div className="p-col-3">
         <Link to="/"><Button label="<-- На стартову сторінку" className="p-button-secondary"/></Link>
        </div>
        <div className="p-col-9">
          <div className="p-grid  p-justify-center">
              <div className="p-grid">
                <Button label="Назад" className="p-button-secondary" onClick={() => props.setIsReqPrevPage(true)} />
                <Button label="Далі" className="p-button-success" onClick={() => props.setIsReqNextPage(true)} />
              </div>
              <div className="p-col-12"></div>
          </div>
        </div>
      </div>
      );
};