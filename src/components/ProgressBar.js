import React from "react";
import ProgressBar from 'react-animated-progress-bar';
import '../styles/progressBar.css'

const DashboardProgressBar = ({percent, name}) => {
  
  return (
    <div className="container-progress text-center h-25 w-25">
     {name}
     <ProgressBar width="190" bgColor="#fffff" trackWidth="13" percentage={percent} defColor={{
            fair: 'blue',
            good: 'yellow',
            excellent: 'green',
            poor: 'red',
          }}/>


      
    </div>
  );
};

export default DashboardProgressBar;
