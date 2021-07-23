import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Video.scss";

// function Video({ videosArr, clickHandle, posterVideo }) {

export default class Video extends Component {
  state = {
    videos: [],
  };

  clickVideo = (click) => {
    this.setState({
      poster: click.image,
      title: click.title,
      summary: click.description,
      likes: click.likes,
      views: click.views,
      author: click.channel,
      timestamp: click.timestamp,
    });
  };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
      )
      .then((res) => {
        console.log(res.data[0]);
        this.setState({ videos: res.data });
      });
  }

  render() {
    let videosarr = this.state.videos;
    let clickHandle = this.clickVideo;
    return videosarr.map((video) => {
      return (
        <Link to="/">
          <div className="video" onClick={() => clickHandle(video)}>
            <img className="video__image" src={video.image} />
            <div className="video__info">
              <h3 className="video__title">{video.title}</h3>
              <h3 className="video__channel">{video.channel}</h3>
            </div>
          </div>
        </Link>
      );
    });
  }
}
