import React from "react";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "./axios";
import VideoCard from "./components/VideoCard/VideoCard";

function Favorite({ selectedCategory }) {
  const [videos, setVideos] = useState([]);
  const [favtVideos, setFavtVideo] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
        setVideos(data.items);
      });
    };
    fetchData();
  }, [selectedCategory]);
  return (
    <div>
      <h1>Favorite Video</h1>
      <Grid container>
        {favtVideos.map((videDetail) => {
          return (
            <Grid item>
              <VideoCard
                key={videDetail.id.videoId}
                title={videDetail.snippet.title}
                channel={videDetail.snippet.channelTitle}
                image={videDetail.snippet.thumbnails.high.url}
                onFavtVideClicked={() => {
                  setFavtVideo([...favtVideos, videDetail]);
                }}
                isfavourite
                showAddFavt={false}
                onRemoveFavt={() => {
                  const newArr = favtVideos.filter(function (obj) {
                    return obj.id.videoId !== videDetail.id.videoId;
                  });
                  setFavtVideo(newArr);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default Favorite;
