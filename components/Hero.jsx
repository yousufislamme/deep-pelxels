"use client";
import { Context } from "@/Context/Context";
import React, { useContext, useState } from "react";
import SearchInput from "./SearchInput";

const Hero = () => {
  const { handleSearchSubmit, setUserSearch } = useContext(Context);
  const headingText =
    "The best free stock photos, royalty free images & videos shared by creators.";
  return (
    <div>
      <div className="w-full h-[30rem] border bg-hero-pattern  flex flex-col justify-center items-center">
        <h1 className="text-3xl w-[600px] mx-auto text-center font-bold text-white font-sans ">
          {headingText}
        </h1>
        <div className="mt-3">
          {/* search input */}
          <SearchInput
            onChange={(e) => setUserSearch(e.target.value)}
            onSubmit={handleSearchSubmit}
          />
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
