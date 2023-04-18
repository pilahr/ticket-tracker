import React from "react";
import "./Search.scss";
import SearchBar from "./SearchBar/SearchBar";
import DropdownSearch from "./DropdownSearch/DropdownSearch";

const Search = () => {
  return <div className="search-container">
    <SearchBar />
    <DropdownSearch />
  </div>;
};

export default Search;
