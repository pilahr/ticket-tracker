import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";
import team from "../../assets/data/team.js";

const EmployeeCard = () => {
  const team = {
    id: 1,
    name: "Alima Miller",
    role: "Junior Software Developer",
  };

  return (
    <div className="employee-card">
      <h2>Id: #{team.id}</h2>
      <h2>Name: {team.name}</h2>
      <h2>Role: {team.role}</h2>
      <Counter />
    </div>
  );
};

export default EmployeeCard;
