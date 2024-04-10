"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);
function MyGlobalState({ children }) {
  const [searchGlo, setSearchGlo] = useState();
  const [userSearch, setUserSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here, such as sending the search query to an API
    setSearchGlo(userSearch); // ami resceive korum
  };

  return (
    <Context.Provider value={{ searchGlo, setUserSearch, handleSearchSubmit }}>
      {children}
    </Context.Provider>
  );
}

export default MyGlobalState;
