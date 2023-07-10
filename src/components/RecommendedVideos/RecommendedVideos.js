import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import { fetchFromAPI } from "../../axios";
import { Grid } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
function RecommendedVideos({ selectedCategory }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
        setVideos(data.items);
      });
    };
    fetchData();
  }, [selectedCategory]);
  return (
    <div className="recommendedVideos">
      <h2> RecommendedVideos</h2>
      <div className="recommendedVideos__videos"></div>
      <Grid container>
        {videos.map((videDetail) => {
          return (
            <Grid>
              <VideoCard
                key={videDetail.snippet.channelId}
                title={videDetail.snippet.title}
                channel={videDetail.snippet.channelTitle}
                image={videDetail.snippet.thumbnails.high.url}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default RecommendedVideos;
