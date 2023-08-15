import React from "react";
import { ProgressSpinner } from 'primereact/progressspinner';


const Spinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <ProgressSpinner />
        </div>
    )
};

export default Spinner;
