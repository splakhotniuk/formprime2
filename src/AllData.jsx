import React from 'react';



export const AllData = (props) => {
    const correctData = (key) => {
        if ( key === "gender" ) {
            return (
                `${props.data.gender.option}`
            )
        }
        return (
            `${props.data[key]}`
        )
    }
    


    return (
        <div>
            {Object.keys(props.data).map((key) => (
                <div className="p-grid p-fluid" key={key}>
                    <div className="p-col-3">
                        <div className="p-grid  p-justify-end">
                            <div className="p-grid  ">
                                <div className="p-col">
                                    <p>{`${key}: `}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-1"></div>
                    <div className="p-col-8">
                        <div className="p-grid  p-justify-start">
                            <div className="p-grid  ">
                                <div className="p-col">
                                    <p> {correctData(key)} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
);
};
