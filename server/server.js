const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videoRoutes");
const cors = require("cors");
app.use(express.json());
// variables needed for option 2 of serving static files
// const path = require("path");
// const public = path.join(__dirname, "public");

// app.use(cors());

// option 1 for serving static files
//This below makes the pages in the public folder accessabile
//by the browser. In this example there is a HTML document
//that when you put localhost:8080 the html website serves up
app.use(express.static("public"));

// option 2 for serving static files
// app.get("/home", (req, res) => {
//   res.sendFile(path.join(public, "index.html"));
// });

app.use((req, _res, next) => {
  console.log("Request:");
  console.log("- Path:", req.path);
  console.log("- Time:", new Date());
  next();
});

app.use("/videos", videoRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
