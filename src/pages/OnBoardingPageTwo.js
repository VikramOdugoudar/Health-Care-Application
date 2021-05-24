import React from "react";
import "../styles/onBoarding.css";
import InfoCard from "../components/InfoCard";
import DropDown from "../components/DropDown";
import { NavLink } from "react-router-dom";

const gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const languages = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
];

const healthStatus = [
  { value: "Pregnancy", label: "Pregnancy" },
  { value: "Not Pregnant", label: "Not Pregnant" },
];

const pregnancyMonth = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
];

const OnBoardingPageTwo = () => {
  return (
    <div className="boarding-container  position-fixed vw-100 vh-100">
      <div className="personal-info mt-4">
        <InfoCard left="City:" placeholder="Enter city" type="text" />
        <DropDown name="Select Gender" options={gender} />
        <DropDown name="Health Status" options={healthStatus} />
        <DropDown name="Pregnancy Months" options={pregnancyMonth} />
        <DropDown name="Select Language" options={languages} />
        <br />
        <div className="text-center mb-4">
          <h5>Do you have Diabetes?</h5>
          <div className="fs-5 d-flex justify-content-evenly">
            <label>
              <input  name="diabetic"  type="radio" value="Yes" />
              Yes
            </label>
            <label>
              <input  name="diabetic"  type="radio" value="No" />
              No
            </label>
          </div>
        </div>

        <div className="boarding-bt d-flex align-items-center justify-content-center">
          <button className="next btn btn-primary mb-3">
            <NavLink exact to="/dashboard">
              Submit
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPageTwo;
