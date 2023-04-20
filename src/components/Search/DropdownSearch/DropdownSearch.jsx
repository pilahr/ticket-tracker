import React, { useState } from "react";
import "./DropdownSearch.scss";
import team from "../../../assets/data/team.js";

const DropdownSearch = () => {
  const [employee, setEmployee] = useState("");

  const sortedName = team.sort((nameA, nameB) => {
    return nameA.name - nameB.name;
  });

  const sortedRole = team.sort((roleA, roleB) => {
    return roleA.role - roleB.role;
  });

  const handleSelect = (event) => {
    const selected = event.target.value;
    setEmployee(selected);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__text">Please select the option: </label>
      <select className="dropdown__select" onChange={handleSelect}>
        <option>ID</option>
        <option onClick={sortedName}>Name</option>
        <option onClick={sortedRole}>Role</option>
      </select>
    </div>
  );
};

export default DropdownSearch;
