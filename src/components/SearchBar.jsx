import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ onChange }) => {
  return (
    <div className="relative">
      <div className="absolute left-[10px] top-[10px]">
        <MdSearch size={30} color="#999999" />
      </div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search"
        className="h-12 w-full rounded-xl bg-[#F4F2F2] pe-4 ps-12 font-Satoshi text-lg font-medium text-[#999999] xl:w-[225px]"
      />
    </div>
  );
};

export default SearchBar;
