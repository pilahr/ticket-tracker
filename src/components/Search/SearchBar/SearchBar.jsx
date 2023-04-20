import React from "react";
import "./SearchBar.scss";
import team from "../../../assets/data/team.js";

const SearchBar = () => {
  const sortedName = team.sort((nameA, nameB) => {
    return nameA.name - nameB.name;
  });

  return (
    <input
      onInput={sortedName}
      className="search-bar"
      placeholder="Search by name..."
    ></input>
  );
};

export default SearchBar;
