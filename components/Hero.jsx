"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";
const Hero = () => {
  return (
    <div className="">
      <div className="w-full h-[30rem] border bg-hero-pattern  flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white font-sans ">
          The best free stock photos, royalty free <br /> images & videos shared
          by creators.
        </h1>
        <div className="relative">
          <input
            type="search"
            name="Search bar"
            placeholder="Search for free photos"
            className="text-lg  w-[450px] px-5 py-2 rounded-md outline-none font-semibold mt-3"
          />
          <IoIosSearch className="text-2xl text-slate-600 absolute top-5  right-3 cursor-pointer " />
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
