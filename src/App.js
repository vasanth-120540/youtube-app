import React, { createContext } from "react";
import "./App.css";
import Home from "./components/HomePage/HomePage";

export const UserContext = createContext(null);
const App = () => {
  return (
    <UserContext.Provider value={{name:'vasanth'}}>
    <Home />
    </UserContext.Provider>
  );
};

export default App;
