import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";
import team from "../../assets/data/team.js";

const EmployeeCard = () => {
  return team.map((employee) => (
    <div className="employee-card">
      <h2>ID: {employee.id}</h2>
      <h2>{employee.name}</h2>
      <h2>{employee.role}</h2>
      <Counter />
    </div>
  ));
};

// const EmployeeCard = (props) => {
//   return (
//     <div className="employee-card">
//       <h2>Id: {props.employeeId}</h2>
//       <h2>Name: {props.employeeName}</h2>
//       <h2>Role: {props.employeeRole}</h2>
//       <Counter />
//     </div>
//   );
// };

export default EmployeeCard;
