import { Avatar, Button } from "@mui/material";
import React from "react";
import "./VideoCard.css";
function VideoCard({
  image,
  title,
  channel,
  onFavtVideClicked,
  isfavourite,
  showAddFavtBtn,
  onRemoveFavt,
}) {
  console.log("favorite" + isfavourite);
  console.log("showButtom" + showAddFavtBtn);
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} />
      <div className="video__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        {!showAddFavtBtn && !isfavourite && (
          <Button
            onClick={() => {
              onFavtVideClicked();
            }}
          >
            Add To Favorite
          </Button>
        )}
        {isfavourite && (
          <Button
            onClick={() => {
              onRemoveFavt();
            }}
          >
            Remove from favourite
          </Button>
        )}
      </div>
    </div>
  );
}

export default VideoCard;
