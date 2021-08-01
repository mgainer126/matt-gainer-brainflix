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
    poster: null, //Hero
    summaryTitle: null, //Summary
    summaryAuthor: null, //Summary
    summaryTimeStamp: null, //Summary
    summaryLikes: null, //Summary
    summaryViews: null, //Summary
    summaryDescription: null, //Summary
    commentsComments: null, //Comments
  };

  clickVideo = (click) => {
    console.log(click);
    this.setState({
      poster: click.image,
      id: click.id,
      summaryTitle: click.title, //Summary
      summaryAuthor: click.channel, //Summary
      summaryTimeStamp: click.timestamp, //Summary
      summaryLikes: click.likes, //Summary
      summaryViews: click.views, //Summary
      summaryDescription: click.description, //Summary
    });
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
        this.setState({
          videos: res.data,
        });
        return res.data[0].id;
      })
      .then((res) => {
        axios.get(`videos/video-details${res}`).then((res) => {
          this.setState({
            videosDetailed: res.data,
            poster: res.data[0].image,
            summaryTitle: res.data[0].title,
            summaryAuthor: res.data[0].channel,
            summaryTimeStamp: res.data[0].timestamp,
            summaryLikes: res.data[0].likes,
            summaryViews: res.data[0].views,
            summaryDescription: res.data[0].description,
            commentsComments: res.data[0].comments,
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
            <Hero poster={this.state.poster} />
            <div className="desktop">
              <div className="desktop__left">
                <Summary
                  videosDetailed={this.state.videosDetailed}
                  summaryTitle={this.state.summaryTitle}
                  summaryAuthor={this.state.summaryAuthor}
                  summaryTimeStamp={this.state.summaryTimeStamp}
                  summaryLikes={this.state.summaryLikes}
                  summaryViews={this.state.summaryViews}
                  summaryDescription={this.state.summaryDescription}
                />
                <CommentsForm />
                <Comments commentsComments={this.state.commentsComments} />
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
