import { Avatar } from "@mui/material";
import React from "react";
import "./VideoCard.css";
function VideoCard({ image, title, channel }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} />
      <div className="video__text">
        <h4>{title}</h4>
        <p>{channel}</p>
      </div>
    </div>
  );
}

export default VideoCard;
