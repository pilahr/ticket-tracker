import React from "react";
import "./Main.scss";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import team from "../../assets/data/team.js";

const Main = () => {
  return (
    <div className="main">
      <EmployeeCard
        employeeId={team.id}
        EmployeeName={team.name}
        EmployeeRole={team.role}
      />
    </div>
  );
};

export default Main;
