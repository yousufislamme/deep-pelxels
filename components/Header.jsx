"use client";
import React, { useContext, useState } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { Context } from "@/Context/Context";
import Button from "./Button";
import { MdNotifications } from "react-icons/md";

const Header = ({ isVisible, searchClass }) => {
  const { handleSearchSubmit } = useContext(Context);
  return (
    <div className="relative">
      <header
        className={`bg-white border-[1px] w-full fixed flex  justify-between items-center  px-10 py-2 ${
          isVisible ? "none" : "fixed absolute top-0 right-0"
        }} `}
      >
        <div>
          <Link href="/">
            <h1 className="font-extrabold flex items-center text-lg">
              <FcStackOfPhotos className="text-[40px]" /> Deep-Pexels
            </h1>
          </Link>
        </div>
        {/* search input */}
        <div>
          <SearchInput
            className={searchClass}
            onSubmit={handleSearchSubmit}
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </div>
        {/* navigation */}
        <div className="flex justify-around items-center gap-3">
          <Button btnTitle="Explore" className="text-slate-700" />
          <Button btnTitle="License" className="text-slate-700" />
          <button>
            <MdNotifications className="text-xl" />
          </button>
          <Button
            className="font-semibold hover:bg-[#05a071] text-white bg-[#05a081] p-4 rounded-md "
            btnTitle="Update"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
