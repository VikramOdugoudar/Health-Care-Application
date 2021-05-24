import React from 'react'
import '../styles/infoCard.css'

const InfoCard = ({left,placeholder,type}) => {
    return (
        <div className="info-card shadow-sm d-flex align-items-center justify-content-around fs-5 fw-normal mb-3">
           {left}
           <input className="fs-6 fw-light" type={type} placeholder={placeholder}/>
           
        </div>
    )
}

export default InfoCard
