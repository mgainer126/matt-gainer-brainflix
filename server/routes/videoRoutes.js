//To start any of this you need to do the following:
//1. Go the the folder that this document is saved
//2. In terminal: npm init
//3. ipm install express -- save
//4. node <file name in this case its server.js>
//5. Confirm that all is working use postman to verify
//the paths that are set up are working

const express = require("express");
const router = express.Router();
// const videoDetails = require("../data/video-details.json");
// const videos = require("../data/videos.json");
const fs = require("fs");
const path = require("path");
// const uniqid = require("uniqid");

//Video Details
const displayVideoDetails = () => {
  const videoDetailsData = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  const parsedVideoDetails = JSON.parse(videoDetailsData);
  console.log(parsedVideoDetails);
  return parsedVideoDetails;
};

router.get("/video-details:id", (req, res) => {
  const videoDetails = displayVideoDetails();
  res.json(videoDetails);
  console.log(videoDetails);
});

//Videos
const videos = () => {
  const videosData = fs.readFileSync(
    path.resolve(__dirname, "../data/videos.json")
  );
  const parsedVideos = JSON.parse(videosData);
  console.log(parsedVideos);
  return parsedVideos;
};

router.get("/videos", (req, res) => {
  const videoList = videos();
  res.json(videoList);
});

router.post("/videos", (req, res) => {
  const newVideo = displayVideoDetails();
  const constVideoObj = {
    id: 111111,
    title: req.body.videoTitle,
    channel: req.body.videoName,
    image: "https://i.imgur.com/ibLw5q5.jpg",
  };
  console.log(constVideoObj);
  newVideo.unshift(constVideoObj);
  fs.writeFileSync("./data/videos.json", JSON.stringify(newVideo));
  res.json(newVideo);
});

module.exports = router;
