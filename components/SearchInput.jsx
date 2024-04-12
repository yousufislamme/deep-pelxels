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
          className="md-w-[250px] rounded-l-md  bg-slate-200 px-5 py-2 text-lg font-semibold outline-none lg:w-[450px]"
        />
        <button type="submit" className="rounded-r-md bg-blue-400 px-3">
          <IoIosSearch className="cursor-pointer text-2xl" />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
