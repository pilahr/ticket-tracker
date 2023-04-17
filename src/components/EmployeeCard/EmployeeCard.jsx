import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = () => {
  return <div className="employee-card">
    <h2>Name</h2>
    <h2>Role</h2>
    <Counter />
  </div>;
};

export default EmployeeCard;
