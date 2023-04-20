import { React, useState } from "react";
import "./SearchBar.scss";
import team from "../../../assets/data/team.js";

const SearchBar = () => {
  // const [name, getName] = useState();

  // const sortedName = team.sort((nameA, nameB) => {
  //   return nameA.name - nameB.name;
  // });

  return (
    <input
      // onInput={(event) => getName(event.target.value)}
      className="search-bar"
      placeholder="Search by name..."
    ></input>
  );
};

export default SearchBar;
