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

  const onCategoryChanged = useCallback((keyWord) => {
    setSelectedCategory(keyWord);
  }, []);

  return (
    <div>
      <Header
        selectedCategory={selectedCategory}
        changeSelectedCateg={onCategoryChanged}
      />
      <div
        style={{
          alignSelf: "center",
          marginLeft: "500px",
          marginBottom: "10px",
        }}
      >
        Previous Search Key : {previousCategory}
      </div>
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
