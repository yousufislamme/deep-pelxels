"use client";
import { Context } from "@/Context/Context";
import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  const [userSearch, setUserSearch] = useState("");
  const { setSearchGlo } = useContext(Context);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here, such as sending the search query to an API
    setSearchGlo(userSearch);
  };

  return (
    <div>
      <div className="w-full h-[30rem] border bg-hero-pattern  flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white font-sans ">
          The best free stock photos, royalty free <br /> images & videos shared
          by creators.
        </h1>
        <div className="mt-3">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="search"
              name="Search bar"
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="Search for free photos"
              className="text-lg w-[450px] px-5 py-2 rounded-l-md outline-none font-semibold"
            />
            <button type="submit" className="bg-blue-400 px-3 rounded-r-md">
              <IoIosSearch className="text-2xl cursor-pointer" />
            </button>
          </form>
        </div>
        <p className="mt-2 text-slate-400 font-semibold">
          <span className="text-white">Trading:</span> Lorem ipsum dolor sit
          amet consectetur
        </p>
      </div>
    </div>
  );
};

export default Hero;
