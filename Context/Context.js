"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);
function MyGlobalState({ children }) {
  const [searchGlo, setSearchGlo] = useState();

  return (
    <Context.Provider value={{ searchGlo, setSearchGlo }}>
      {children}
    </Context.Provider>
  );
}

export default MyGlobalState;
