import React from "react";

const BloodCard = ({title}) => {
  return (
    <div className="blood-card mt-3 p-3 mx-3 bg-white rounded-2">
      <div className="blood-head d-flex align-items-center justify-content-between">
        <h6 className="mt-1">{title}</h6>
        <input type="text" placeholder="Enter New Value" />
      </div>
      <div className="mt-3 d-flex align-items-center justify-content-between px-3">
        <div className="text-center">
          <h6 className="mb-0">Normal Value:</h6>
          <h6 className="text-success mb-0">180</h6>
          <h6 className="text-muted">mg/dl</h6>
        </div>
        <div className="text-center">
          <h6 className="mb-0">Actual Value:</h6>
          <h6 className="text-success mb-0">N/A</h6>
          <h6 className="text-muted">mg/dl</h6>
        </div>
      </div>
    </div>
  );
};

export default BloodCard;
