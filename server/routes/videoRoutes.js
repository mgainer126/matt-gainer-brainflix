//To start any of this you need to do the following:
//1. Go the the folder that this document is saved
//2. In terminal: npm init
//3. ipm install express -- save
//4. node <file name in this case its server.js>
//5. Confirm that all is working use postman to verify
//the paths that are set up are working

const express = require("express");
const router = express.Router();
const videoDetails = require("../data/video-details.json");
const videos = require("../data/videos.json");

router.get("/video-details", (req, res) => {
  res.json(videoDetails);
});

router.get("/videos", (req, res) => {
  res.json(videos);
});

module.exports = router;
