import React, { useContext, useEffect, useRef, useState } from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContext } from "../../App";
function Header({changeSelectedCateg,selectedCategory}) {
  const userDetails = useContext(UserContext);
  const [searchKey,setSearchKey] = useState('');
  return (
    <div className="header">
      <div className=".header__left">
        <MenuIcon />
        <img
           alt="img"
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" onChange={(e) => setSearchKey(e.target.value)} />
        <div onClick={()=>{
          console.log('ccc',searchKey)
          changeSelectedCateg(searchKey)
          }}><SearchIcon  className="header_inputButton" /></div>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsActiveIcon className="header__icon" />
        <AccountCircleIcon className="header__icon" />
        <div style={{alignSelf:'center'}}>{userDetails.name}</div>
      </div>
    </div>
  );
}

export default Header;
