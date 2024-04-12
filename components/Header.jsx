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
        className={`fixed flex w-full items-center justify-between  border-[1px] bg-white  px-10 py-2 ${
          isVisible ? "none" : "fixed absolute right-0 top-0"
        }} `}
      >
        <div>
          <Link href="/">
            <h1 className="flex items-center text-lg font-extrabold">
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
        <div className="flex items-center justify-around gap-3">
          <Button btnTitle="Explore" className="text-slate-700" />
          <Button btnTitle="License" className="text-slate-700" />
          <button>
            <MdNotifications className="text-xl" />
          </button>
          <Button
            className="rounded-md bg-[#05a081] p-4 font-semibold text-white hover:bg-[#05a071] "
            btnTitle="Update"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
