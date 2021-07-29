import "../Home/Home.scss";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary/Summary";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Video from "../../components/Video/Video";
import React, { Component } from "react";
import axios from "axios";
import apikey from "../../data/api-key";

export default class Main extends Component {
  state = {
    videos: null,
    videosDetailed: null,
    id: null,
  };

  clickVideo = (click) => {
    this.setState({ id: click.id });
  };

  componentDidUpdate(prevState, prevProps) {
    // if (prevState.id !== null)
    //   axios
    //     .get(
    //       `https://project-2-api.herokuapp.com/videos/${this.state.id}?api_key=${apikey}`
    //     )
    //     .then((res) => {
    //       this.setState({
    //         videosDetailed: res.data,
    //         id: res.id,
    //       });
    //       return;
    //     });
  }

  componentDidMount() {
    axios
      .get("/videos/videos")
      .then((res) => {
        console.log(res.data);
        this.setState({
          videos: res.data,
        });
        return res.data[0].id;
      })
      .then((res) => {
        axios.get(`videos/video-details${res}`).then((res) => {
          console.log(res.data[0].comments);
          this.setState({
            videosDetailed: res.data,
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
            <Hero videosDetailed={this.state.videosDetailed} />
            <div className="desktop">
              <div className="desktop__left">
                <Summary videosDetailed={this.state.videosDetailed} />
                <CommentsForm />
                <Comments videosDetailed={this.state.videosDetailed} />
              </div>
              <div className="desktop__right">
                <h3 className="video-sec">Next Video</h3>
                <Video
                  videosArr={this.state.videos}
                  clickHandle={this.clickVideo}
                  videosDetailed={this.state.videosDetailed}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
