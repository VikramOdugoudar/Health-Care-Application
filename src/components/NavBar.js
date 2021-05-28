import React from 'react'
import { BiDonateBlood } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsViewList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

const NavBar = () => {
    return (
        <div className="text-center bottom-nav w-100">
        <button className="text-center mx-auto btn btn-primary btn-sm">
          <NavLink
            className="d-flex mx-2 flex-column"
            exact
            to="/bloodInvestigation"
          >
            <BiDonateBlood className="mx-auto fs-3" />
            Blood Report
          </NavLink>
        </button>
        <button className="text-center mx-auto btn btn-primary">
          <NavLink className="d-flex mx-2 flex-column" exact to="/activity">
            <AiFillHeart className="mx-auto fs-3" />
            Activity
          </NavLink>
        </button>
        <button className="text-center mx-auto btn btn-primary">
          <NavLink className="d-flex mx-2 flex-column" exact to="/dashboard">
            <MdDashboard className="mx-auto fs-3" />
            Dashboard
          </NavLink>
        </button>
        <button className="text-center mx-auto btn btn-primary btn-sm">
          <NavLink className="d-flex mx-2 flex-column" exact to="/profile">
            <BsViewList className="mx-auto fs-3" />
            Profile
          </NavLink>
        </button>
      </div>
    )
}

export default NavBar
