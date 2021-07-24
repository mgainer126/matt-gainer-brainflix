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
    // comments: [],
    // timestamp: [],
    // author: [],
    // title: [],
    // poster: [],
    // summary: [],
    // likes: [],
    // views: [],
    // id: [],
  };

  // Detailed API Call used to pull specific comment by ID

  // clickVideo = (click) => {
  //   let id = click.id;
  //   console.log(id);
  //   axios
  //     .get(
  //       `https://project-2-api.herokuapp.com/videos/${id}?api_key=5f40c944-c6f0-45d0-b713-8ec93829e295`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({
  //         poster: res.data.image,
  //         title: res.data.title,
  //         summary: res.data.description,
  //         likes: res.data.likes,
  //         views: res.data.views,
  //         author: res.data.channel,
  //         timestamp: res.data.timestamp,
  //         comments: res.data.comments,
  //         id: res.data.id,
  //       });
  //     });
  // };

  // This occurs during first load of the page
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
        console.log(res);
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
