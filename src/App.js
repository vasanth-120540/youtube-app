import React, { createContext } from "react";
import "./App.css";
import Home from "./components/HomePage/HomePage";
import Favorite from "./Favorite";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export const UserContext = createContext(null);
const App = () => {
  return (
    <UserContext.Provider value={{ name: "vasanth" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;

//A unique way to implement a useRef hook is to use it to store values instead of DOM references. These values can either be a state that does not need to change too often or a state that should change as frequently as possible but should not trigger full re-rendering of the component
