import React from 'react'
import Select from 'react-select'; 
import '../styles/dropDown.css'



const DropDown = ({name, options}) => {
    return (
        <div className="dropdown shadow-sm d-flex align-items-center justify-content-around fs-5 fw-normal mb-3">
            {name}
            <Select className="fs-6 w-50" options={options} />
        </div>
    )
}

export default DropDown
