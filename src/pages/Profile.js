import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../styles/profile.css";
const Profile = () => {
  return (
    <div className=" profile-container">
      <button className="bg-white h3 position-absolute">
        <NavLink exact to="/dashboard">
          <IoMdArrowRoundBack />
        </NavLink>
      </button>
      <h3 className="text-center mt-4 mb-0">Your Profile</h3>
      <div className="profile-body text-center py-3 mt-2">
        <div className="my-profile d-flex align-items-center justify-content-around bg-white  m-3 p-2 rounded">
          <div className="photo bg-success rounded-circle"></div>
          <div>
            <h6 className="mb-0">Lorem Epsum</h6>
            <button className="p-1 text-success bg-mute rounded-1">Update Photo</button>
          </div>
        </div>
        <div className="bg-white  m-3 p-2 rounded">
          <h6 className="mb-0">Assigned Doctor</h6>
          <p>Anubhav Roy</p>
        </div>
        <div className="profile-info bg-white  m-3 p-3 rounded">
          <h6>Edit Profile</h6>
          <div className="card">
            <input placeholder="Name" className="p-1" />
          </div>
          <br />
          <div className="card address">
            <input placeholder="Weigth in Kgs" className="p-1" />
          </div>
          <br />
          <div className="card">
            <input placeholder="City" className="p-1" />
          </div>
          <br />
          <div className="card">
            <input placeholder="District" className="p-1" />
          </div>
          <br />
          <div className="card">
            <input placeholder="Address" className="p-1" />
          </div>
        </div>
        <button className="btn btn-primary ">
            
            <NavLink className=" mx-2 text-white" exact to="/dashboard">
            
            Verify Changes
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Profile;
