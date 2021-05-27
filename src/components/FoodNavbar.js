import React from "react";
import Select from "react-select";
import "../styles/foodNavbar.css";
import { useState } from "react";

const options = [
  { value: "idli", label: "idli" },
  { value: "dosa", label: "dosa" },
  { value: "rice", label: "rice" },
  { value: "samosa", label: "samosa" },
  { value: "chapati", label: "chapati" },
];

const quantity = [
  { value: "1 portion", label: "1 portion" },
  { value: "2 portion", label: "2 portion" },
  { value: "3 portion", label: "3 portion" },
  { value: "4 portion", label: "4 portion" },
  { value: "5 portion", label: "5 portion" },
];
const FoodNavbar = () => {
  const [selectedQuantity, setQuantity] = useState(0);
  const [selectedMeals, setMeals] = useState("");

  const quantityHandler = (e) => {
    setQuantity(() => e.value);
  };

  const mealHandler = (e) => {
    setMeals(() => e.value);
  };

  return (
    <>
      <nav className="food-nav bg-white p-1 rounded d-flex justify-content-evenly align-items-center">
        <button className="btn btn-light">Breakfast</button>
        <button className="btn btn-light">Lunch</button>
        <button className="btn btn-light">Snacks</button>
        <button className="btn btn-light">Dinner</button>
      </nav>

      <div className="meal mt-3 d-flex align-items-center justify-content-evenly">
        <label className=" w-25">
          <h6 className="mb-0">Meals</h6>
          <Select
            placeholder="Meals"
            className="meals"
            options={options}
            onChange={mealHandler}
          />
        </label>
        <label className=" w-25">
          <h6 className="mb-0">Qty</h6>
          <Select
            placeholder="qty"
            className="quantity"
            options={quantity}
            //value={}
            onChange={quantityHandler}
          />
        </label>
        <button className="btn mt-3 btn-primary btn-sm">Add Item</button>
      </div>

      <div className="selected-items mt-4   bg-white rounded mb-3 p-2">
        {selectedMeals.length
          ? selectedQuantity
            ? ` 
          ${selectedQuantity} of ${selectedMeals}`
            : "Select Quantity"
          : "No Meals Selected"}
      </div>
    </>
  );
};

export default FoodNavbar;
