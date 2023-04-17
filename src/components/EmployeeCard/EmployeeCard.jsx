import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";
import team from "../../assets/data/team.js";

const EmployeeCard = () => {
  return team.map((employee) => (
    <div className="employee-card">
      <h2>Id: {employee.id}</h2>
      <h2>Name: {employee.name}</h2>
      <h2>Role: {employee.role}</h2>
      <Counter />
    </div>
  ));
};

export default EmployeeCard;
