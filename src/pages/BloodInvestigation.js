import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../styles/bloodInvestigation.css";
import BloodCard from "../components/BloodCard";
import NavBar from "../components/NavBar";
const BloodInvestigation = () => {
  return (
    <div>
      <div className="position-fixed bottom-0  left-0 text-white w-100">
        <NavBar />
      </div>
      <div className="blood-container">
        <button className="bg-white h3 position-absolute">
          <NavLink exact to="/dashboard">
            <IoMdArrowRoundBack />
          </NavLink>
        </button>
        <h3 className="text-center mt-4 mb-0">Blood Investigation</h3>
        <div className=" blood-body mt-3 p-2">
          <h6 className="text-center mb-2">
            Enter the following values as specified
          </h6>
          <p className="text-center fs-6">Date and time of report</p>
          <div className="d-flex date-time align-items-center justify-content-evenly">
            <input
              type="date"
              className="fw-light p-1 rounded-1 "
              placeholder="Pick a date"
            ></input>
            <input
              type="time"
              className="fw-light p-1 rounded-1"
              placeholder="Pick a date"
            ></input>
          </div>
          <BloodCard title="FBS:" />
          <BloodCard title="PPBS:" />
          <BloodCard title="SUGAR:" />

          <div className="text-center my-1">
            <button className="btn  w-75 btn-success ">Confirm</button>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodInvestigation;
