import React from "react";
import "./Sidebar.css";
import SidebarRow from "../SideBarRow/SidebarRow";
import AddHomeIcon from "@mui/icons-material/AddHome";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Sidebar({ leftSelectedMenu, onLeftSelectedChanged }) {
  // const navigate = useNavigate();

  return (
    <div className="sidebar">
      <SidebarRow
        selected={leftSelectedMenu === "home"}
        Icon={AddHomeIcon}
        title="Home"
        appendOnClick
        rowKey="/"
        onLeftSelectedChanged={onLeftSelectedChanged}
      />

      <SidebarRow
        selected={leftSelectedMenu === "favorite"}
        title="Favorite"
        appendOnClick
        rowKey="/favorites"
        onLeftSelectedChanged={onLeftSelectedChanged}
        Icon={FavoriteIcon}
      />

      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />

      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your video" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch-Larter" />
      <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked Video" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
    </div>
  );
}

export default Sidebar;
