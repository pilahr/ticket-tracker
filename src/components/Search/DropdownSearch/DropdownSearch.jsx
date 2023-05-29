import React, { useState } from "react";
import "./DropdownSearch.scss";
import team from "../../../assets/data/team.js";

// const DropdownSearch = () => {
//   const [select, setSelect] = useState("");





  return (
    <div className="dropdown">
      <label className="dropdown__text">Please select the option: </label>
      <select
        className="dropdown__select"
      >
        <option>ID</option>
        <option>Name</option>
        <option>Role</option>
      </select>
    </div>
  );
};

export default DropdownSearch;
