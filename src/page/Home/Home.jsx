import "../Home/Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary/Summary";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Video from "../../components/Video/Video";
import React, { Component } from "react";
import comments from "../../data/video-details.json";
import likesIcon from "../../assets/icons/Icon-likes.svg";
import viewsIcon from "../../assets/icons/Icon-views.svg";
import axios from "axios";

export default class Main extends Component {
  state = {
    videos: null,
    videosDetailed: null,
    id: null,
  };

  // Detailed API Call used to pull specific comment by ID

  clickVideo = (click) => {
    let id = click.id;
    this.setState({ id: click.id });
    console.log(id); //This captures the id of the video selected
  };

  componentDidUpdate(prevState, prevProps) {
    console.log(this.state.id);
    if (this.state.id !== null)
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.state.id}?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
        )
        .then((res) => {
          console.log(res);
          this.setState({
            videosDetailed: res.data,
            id: res.id,
          });
          return;
        });
  }

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
      )
      .then((res) => {
        this.setState({
          videos: res.data,
        });
        return res.data[0].id;
      })
      .then((res) => {
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${res}?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
          )
          .then((res) => {
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
                <Summary
                  videosDetailed={this.state.videosDetailed}
                  // summary={this.state.summary}
                  // likes={this.state.likes}
                  // views={this.state.views}
                  // likesIcon={likesIcon}
                  // viewsIcon={viewsIcon}
                  // author={this.state.author}
                  // timestamp={this.state.timestamp}
                />
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
