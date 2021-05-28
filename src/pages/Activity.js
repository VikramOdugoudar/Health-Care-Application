import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../styles/activity.css";
import Select from "react-select";
import NavBar from "../components/NavBar"
const activity = [
  { value: "Yoga", label: "Yoga" },
  { value: "Gym", label: "Gym" },
  { value: "Walking", label: "Walking" },
  { value: "Jogging", label: "Jogging" },
  { value: "Swimming", label: "Swimming" },
  { value: "Cycling", label: "Cycling" },
  { value: "Dancing", label: "Dancing" },
  { value: "Tennis", label: "Tennis" },
  { value: "Shuttle", label: "Shuttle" },
  { value: "Aerobics", label: "Aerobics" },
];

const performence = [
  { value: "Bedridden", label: "Bedridden" },
  { value: "Self Care", label: "Self Care" },
  { value: "Unrestricted", label: "Unrestricted" },
  { value: "Active", label: "Active" },
  { value: "Normal", label: "Normal" },
];
const distance = [
  { value: "1km", label: "1km" },
  { value: "2km", label: "2km" },
  { value: "3km", label: "3km" },
  { value: "4km", label: "4km" },
  { value: "5km", label: "5km" },
];

const duration = [
  { value: "30mins", label: "30mins" },
  { value: "60mins", label: "60mins" },
  { value: "90mins", label: "90mins" },
  { value: "120mins", label: "120mins" },
  { value: "150mins", label: "150mins" },
];

const Activity = () => {
  return (
    <div>
       <div className="position-fixed bottom-0  left-0 text-white w-100">
        <NavBar/>
      </div>
      <div className="activity-container">
        <button className="bg-white h3 position-absolute">
          <NavLink exact to="/dashboard">
            <IoMdArrowRoundBack />
          </NavLink>
        </button>
        <h3 className="text-center mt-4 mb-0">Activity Input</h3>
        <div className="activity-body p-2 mt-2">
          <h6 className=" text-center">Performence Status</h6>

          <div className="activity-dropdown text-center w-100">
            <Select
              className="fs-6 w-100 text-center"
              options={performence}
              placeholder="Choose"
            />
          </div>

          <h6 className="mt-4 text-center">Add Activity</h6>
          <div className="date-time d-flex align-items-center justify-content-evenly">
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
          <div className="mt-2 activity-bottom">
            <Select
              className="one fs-6 w-100 mt-2 text-center"
              options={activity}
              placeholder="Activity"
            />
            <Select
              className="two fs-6 distance mt-2 text-center"
              options={distance}
              placeholder="Distance"
            />
            <Select
              className="three fs-6 duration mt-2 text-center"
              options={duration}
              placeholder="Duration"
            />
            <button className="four btn btn-primary">Add Actvity</button>
          </div>
          <div className="mt-4">
            Calories Burned:
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
