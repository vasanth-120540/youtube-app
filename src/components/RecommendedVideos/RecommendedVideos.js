import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import { fetchFromAPI } from "../../axios";
import { Grid } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";

function RecommendedVideos({ selectedCategory, leftSelectedMenu }) {
  const [videos, setVideos] = useState([]);
  const [favtVideos, setFavtVideo] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
        console.log("data", data);
        setVideos(data.items);
      });
    };
    fetchData();
  }, [selectedCategory]);
  return (
    <div className="recommendedVideos">
      <h2> {leftSelectedMenu === "home" ? "Home" : "Favourites"}</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Grid container sx={{ flex: 5 }}>
          {leftSelectedMenu === "home"
            ? videos.map((videDetail) => {
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
                      showAddFavtBtn={
                        favtVideos.length > 0
                          ? favtVideos.find(function (obj) {
                              return obj.id.videoId === videDetail.id.videoId;
                            })
                          : false
                      }
                    />
                  </Grid>
                );
              })
            : favtVideos.map((videDetail) => {
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
                      isfavourite={true}
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
    </div>
  );
}

export default RecommendedVideos;
