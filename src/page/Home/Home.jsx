import "../Home/Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary/Summary";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Video from "../../components/Video/Video";
import React, { Component } from "react";
import videos from "../../data/videos.json";
import comments from "../../data/video-details.json";
import likesIcon from "../../assets/icons/Icon-likes.svg";
import viewsIcon from "../../assets/icons/Icon-views.svg";

export default class Main extends Component {
  state = {
    videos: videos,
    comments: comments,
    timestamp: comments[0].timestamp,
    author: comments[0].channel,
    title: comments[0].title,
    poster: comments[0].image,
    summary: comments[0].description,
    likes: comments[0].likes,
    views: comments[0].views,
    likesIcon: likesIcon,
    viewsIcon: viewsIcon,
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

  render() {
    return (
      <div>
        <Header search={this.state.search} />
        <Hero poster={this.state.poster} />
        <div className="desktop">
          <div className="desktop__left">
            <Summary
              title={this.state.title}
              summary={this.state.summary}
              likes={this.state.likes}
              views={this.state.views}
              likesIcon={likesIcon}
              viewsIcon={viewsIcon}
              author={this.state.author}
              timestamp={this.state.timestamp}
            />
            <CommentsForm />
            <Comments commentsArr={this.state.comments[0].comments} />
          </div>
          <div className="desktop__right">
            <h3 className="video-sec">Next Video</h3>
            <Video
              videosArr={this.state.comments}
              clickHandle={this.clickVideo}
              posterVideo={this.state.poster}
              filteredVideos={this.filteredVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}
