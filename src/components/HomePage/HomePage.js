import React, { createContext, useCallback, useState } from "react";
import Header from "../Header/header.js";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos.js";
import Sidebar from "../Sidebar/Sidebar.js";
import { usePrevious } from "../../hooks/usePrevious.js";

export const UserContext = createContext(null);
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const previousCategory = usePrevious(selectedCategory);
  const [leftSelectedMenu, setLeftSelectedMenu] = useState("home");
  const onCategoryChanged = useCallback((keyWord) => {
    setSelectedCategory(keyWord);
  }, []);
  const onLeftSelectedHandler = (name) => {
    setLeftSelectedMenu(name);
  };
  return (
    <div>
      <Header
        selectedCategory={selectedCategory}
        changeSelectedCateg={onCategoryChanged}
      />
      <div className="app__page">
        <Sidebar
          leftSelectedMenu={leftSelectedMenu}
          onLeftSelectedChanged={onLeftSelectedHandler}
        />
        <RecommendedVideos
          leftSelectedMenu={leftSelectedMenu}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Home;
