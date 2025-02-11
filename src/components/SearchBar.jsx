import React from "react";
import { SearchIcon } from "../assets/icons";

const SearchBar = ({ onChange }) => {
  return (
    <div className="relative">
      <div className="absolute left-2 top-0">
        <SearchIcon fill="#999999" />
      </div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search"
        className="h-12 w-full rounded-xl bg-[#F4F2F2] pe-4 ps-14 font-Satoshi text-lg font-medium text-[#999999] xl:w-[225px]"
      />
    </div>
  );
};

export default SearchBar;
