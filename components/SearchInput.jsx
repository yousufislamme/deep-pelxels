import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ onSubmit, onChange, className }) => {
  return (
    <>
      <form onSubmit={onSubmit} className={`${className} flex `}>
        <input
          type="search"
          name="Search bar"
          onChange={onChange}
          placeholder="Search for free photos"
          className="text-lg bg-slate-200  md-w-[250px] lg:w-[450px] px-5 py-2 rounded-l-md outline-none font-semibold"
        />
        <button type="submit" className="bg-blue-400 px-3 rounded-r-md">
          <IoIosSearch className="text-2xl cursor-pointer" />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
