import "../Home/Home.scss";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary/Summary";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Video from "../../components/Video/Video";
import React, { Component } from "react";
import axios from "axios";

export default class Main extends Component {
  state = {
    videos: null,
    videosDetailed: null,
    id: null,
    summaryVideos: null,
  };

  clickVideo = (click) => {
    this.setState({
      id: click.id,
      summaryVideos: click,
    });
  };

  componentDidMount() {
    axios
      .get("/videos/videos")
      .then((res) => {
        this.setState({
          videos: res.data,
        });
        return res.data[0].id;
      })
      .then((res) => {
        axios.get(`videos/video-details${res}`).then((res) => {
          let videoData = res.data[0];
          this.setState({
            videosDetailed: res.data,
            summaryVideos: videoData, //here is the experimient
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.videosDetailed && this.state.videos && (
          <div>
            <Hero summaryVideos={this.state.summaryVideos} />
            <div className="desktop">
              <div className="desktop__left">
                <Summary summaryVideos={this.state.summaryVideos} />
                <CommentsForm />
                <Comments commentsComments={this.state.videosDetailed} />
              </div>
              <div className="desktop__right">
                <h3 className="video-sec">Next Video</h3>
                <Video
                  videosArr={this.state.videos}
                  clickHandle={this.clickVideo}
                  idCurrentHero={this.state.id}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
