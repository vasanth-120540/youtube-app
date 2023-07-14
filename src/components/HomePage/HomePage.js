import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "../Header/header.js";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos.js";
import { fetchFromAPI } from "../../axios";
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
  // const onLeftSelectedHandler = (name) => {
  //   setLeftSelectedMenu(name);
  // };
  return (
    <div>
      <Header
        selectedCategory={selectedCategory}
        changeSelectedCateg={onCategoryChanged}
      />
      {/* <div
        style={{
          alignSelf: "center",
          marginLeft: "500px",
          marginBottom: "10px",
        }}
      >
        Previous Search Key : {previousCategory}
      </div> */}
      <div className="app__page">
        <Sidebar
          leftSelectedMenu={leftSelectedMenu}
          onLeftSelectedChanged={(name) => {
            setLeftSelectedMenu(name);
          }}
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
