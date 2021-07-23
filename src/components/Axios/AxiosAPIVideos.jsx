import React from "react";
import axios from "axios";

export default class VideosApi extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
      )
      .then((res) => {
        console.log(res.data);
      });
  }
}

// render();
// {
//   return {
//     /* <ul>{this.state.videos.map(video => <li>{video.image}</li>)}</ul>; */
//   };
// }
