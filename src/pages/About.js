import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/about.css'
const About = () => {
  return (
    <NavLink exact to="/login">
    <div className="about vw-100 vh-100 text-white">
      <div className="logo w-100 d-flex flex-column justify-content-center align-items-center" >
        <div className="display-1 fw-normal">C</div>
        <p className="h1">Curilux</p>
        <p className="fs-5">User Application</p>
      </div>
      <footer className="text-center">
      <p className="m-0">&copy; All Rights Reserved </p>
        <p>Curilux India Pvt. Ltd. 2021</p>
      </footer>
    </div>
    </NavLink>
  );
};

export default About;
