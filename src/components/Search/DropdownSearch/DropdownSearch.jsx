import React, { useState } from "react";
import "./DropdownSearch.scss";
import team from "../../../assets/data/team.js";

const DropdownSearch = () => {
  // const [select, setSelect] = useState("");

  // const handleSelect = (event) => {
  //   setSelect(event.target.value);

  //   const selectedNames = [...team]
  //     .filter((name) => name.name)
  //     .sort((nameA, nameB) => nameA.name - nameB.name);

  //   const selectedRoles = [...team]
  //     .filter((role) => role.role)
  //     .sort((roleA, roleB) => roleB.role - roleA.role);
  // };

  return (
    <div className="dropdown">
      <label className="dropdown__text">Please select the option: </label>
      <select
        className="dropdown__select"
        // value={select}
        // onChange={handleSelect}
      >
        <option>ID</option>
        <option>Name</option>
        <option>Role</option>
      </select>
    </div>
  );
};

export default DropdownSearch;
