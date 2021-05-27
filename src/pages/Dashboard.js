import React from "react";
import FoodNavbar from "../components/FoodNavbar";
import ProgressBar from "../components/ProgressBar";
import "../styles/dashboard.css";
import NavBar from "../components/NavBar"


const Dashboard = () => {
  return (
    <div>
      <div className="position-fixed bottom-0  left-0 text-white w-100">
        <NavBar/>
      </div>
      <h3 className="text-center mt-3 mb-0">Jeevani</h3>
      <p className="doctor mt-0 text-center ">
        of Doctor <span>null</span>
      </p>
      <div className="dashboard-body p-2">
        <FoodNavbar />
        <div className="d-flex align-items-center">
          <ProgressBar percent="50" name="Carbs" />
          <ProgressBar percent="20" name="Protien" />
          <ProgressBar percent="80" name="Fats" />
          <ProgressBar percent="40" name="Calories" />
        </div>
        <div className="feed bg-white mt-4 p-3 mx-2 rounded-2 ">
          <div className="head d-flex ml4 align-items-center justify-content-around">
            <h6>RT_FEF</h6>
            <button className="btn  btn-primary shadow-sm btn-sm">Buy</button>
          </div>
          <h6 className="text-center text-danger mb-0">
            Consume 50ml of RT-FED
          </h6>
          <p className="info text-center mx-auto ">
            Avoid Spinach and Ragi-Malt. It has potassium and calcium which can
            cause Heart Rate Variation.
          </p>
          <div className="bottom d-flex align-items-center justify-content-evenly">
            <button className="b1 px-3  rounded-3">Consumed</button>
            <button className="b1 b2 px-4 rounded-3 ">Missed</button>
          </div>
        </div>
        <div className="foot-card bg-warning mt-4 p-3 mx-2 rounded-2">
          <h6 className="text-danger mb-3">Increase</h6>
          <p className="text-center">
            Your Meal contsins has less protien than required. This will lead to
            weaker musceles, joint problems, higher bllod sugar.
          </p>
          <p className="text-center">
            To impove protien content consume protien rich foods such as Mil,
            Eggs, Nuts.
          </p>
        </div>
        <br />
        
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
