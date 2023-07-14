import { Button, Grid } from "@mui/material";
import React from "react";
import "./VideoCard.css";
function VideoCard({
  onFavtVideClicked,
  onRemoveFavt,
  videosList,
  favtVideosHash,
}) {
  return videosList.map((VideoDetail) => {
    return (
      <Grid item>
        <div className="videoCard">
          <img
            className="videoCard__thumbnail"
            src={VideoDetail.snippet.thumbnails.high.url}
          />
          <div className="video__text">
            <h4>{VideoDetail.snippet.title}</h4>
            <p>{VideoDetail.snippet.channelTitle}</p>
            {!favtVideosHash?.[VideoDetail.id.videoId] && (
              <Button
                onClick={() => {
                  onFavtVideClicked(VideoDetail);
                }}
              >
                Add To Favorite
              </Button>
            )}
            {favtVideosHash?.[VideoDetail.id.videoId] && (
              <Button
                onClick={() => {
                  onRemoveFavt(VideoDetail);
                }}
              >
                Remove from favourite
              </Button>
            )}
          </div>
        </div>
      </Grid>
    );
  });
}

export default VideoCard;
