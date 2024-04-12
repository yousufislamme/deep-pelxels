"use client";
import { Context } from "@/Context/Context";
import { useContext } from "react";
import SearchInput from "./SearchInput";

const Hero = () => {
  const { handleSearchSubmit, setUserSearch } = useContext(Context);
  const headingText =
    "The best free stock photos, royalty free images & videos shared by creators.";
  return (
    <div className="w-full">
      <div className=" flex h-[30rem] w-full flex-col items-center justify-center border bg-pink-300 bg-hero-pattern bg-no-repeat object-cover">
        <h1 className="mx-auto w-[600px] text-center font-sans text-3xl font-bold text-white ">
          {headingText}
        </h1>
        <div className="mt-3">
          {/* search input */}
          <SearchInput
            onChange={(e) => setUserSearch(e.target.value)}
            onSubmit={handleSearchSubmit}
          />
        </div>
        <p className="mt-2 font-semibold text-slate-400">
          <span className="text-white">Trading:</span> Lorem ipsum dolor sit
          amet consectetur
        </p>
      </div>
    </div>
  );
};

export default Hero;
