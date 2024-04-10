"use client";
import React, { useContext } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { Context } from "@/Context/Context";

const Header = () => {
  const { handleSearchSubmit, setUserSearch } = useContext(Context);
  return (
    <header className="flex justify-between items-center bg-red-500 px-10 py-2 ">
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
          onSubmit={handleSearchSubmit}
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>
      {/* navigation */}
      <div></div>
    </header>
  );
};

export default Header;
