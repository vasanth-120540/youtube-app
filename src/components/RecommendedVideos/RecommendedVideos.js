import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import { fetchFromAPI } from "../../axios";
import { Grid } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";

function RecommendedVideos({ selectedCategory, leftSelectedMenu }) {
  const [videos, setVideos] = useState([]);
  const [favtVideos, setFavtVideo] = useState([]);
  // hash
  const fetchData = () => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  };
  fetchData();

  useEffect(() => {
    let favvideo = localStorage.getItem("favvideo");
    if (favvideo) {
      favvideo = JSON.parse(favvideo);
    } else {
      favvideo = [];
    }
    console.log(favvideo);
    setFavtVideo(favvideo);
  }, []);

  const getVideocardProps = () => {
    const videCardProps = {};
    const favtVideosHash = {};
    favtVideos.forEach((favtVideo) => {
      favtVideosHash[favtVideo.id.videoId] = favtVideo;
    });
    if (leftSelectedMenu === "home") {
      videCardProps.videosList = videos;
    } else {
      videCardProps.videosList = favtVideos;
    }
    videCardProps.favtVideosHash = favtVideosHash;
    return videCardProps;
  };
  const onFavtVideClicked = (videDetail) => {
    setFavtVideo([...favtVideos, videDetail]);
    localStorage.setItem(
      "favvideo",
      JSON.stringify([...favtVideos, videDetail])
    );
  };
  const onRemoveFavt = (videDetail) => {
    const newArr = favtVideos.filter(function (obj) {
      return obj.id.videoId !== videDetail.id.videoId;
    });
    setFavtVideo(newArr);
    localStorage.setItem("favvideo", JSON.stringify(newArr));
  };
  return (
    <div className="recommendedVideos">
      <h2> {leftSelectedMenu === "home" ? "Home" : "Favourites"}</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Grid container sx={{ flex: 5 }}>
          <VideoCard
            {...getVideocardProps()}
            onFavtVideClicked={onFavtVideClicked}
            onRemoveFavt={onRemoveFavt}
          />
          {
            // left === home ? <homevides/>: <favtVideos/>
          }
        </Grid>
      </div>
    </div>
  );
}

export default RecommendedVideos;
