import React from "react";
import "../styles/onBoarding.css";
import InfoCard from "../components/InfoCard";
import { TiTick } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const OnBoardingPage = () => {
  return (
    <div className="boarding-container position-fixed vw-100 vh-100">
      <h4 className="text-center mt-3">You Are At the Clinic Of</h4>
      <div className="cdx w-100 d-flex align-items-center justify-content-evenly ">
        <h5 className="text-white">CDX:</h5>
        <input type="text" name="cdx" />
        <button className="icon-btn text-success">
          <TiTick />
        </button>
      </div>
      <h4 className="text-center mt-3">
        Please Provide your Personal information
      </h4>
      <div className="personal-info ">
        <InfoCard left="Full Name:" placeholder="Enter name" type="text" />
        <InfoCard left="Date Of Birth:" placeholder="Pick a date" type="date" />
        <InfoCard
          left="Weight:"
          placeholder="Enter weight in Kg"
          type="number"
        />
        <InfoCard left="Address:" placeholder="Enter address" type="text" />
        <InfoCard left="District:" placeholder="Enter district" type="text" />
        <div className="boarding-bt d-flex align-items-center justify-content-center">
          <button className="next btn btn-primary mb-3">
            <NavLink  exact to="/boardingTwo">Next</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
