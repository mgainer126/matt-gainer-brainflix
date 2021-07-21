import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Summary from "./components/Summary/Summary";
import Comments from "./components/Comments/Comments";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import Video from "./components/Video/Video";
import { Component } from "react";
import videos from "./data/videos.json";
import comments from "./data/video-details.json";
import likesIcon from "./assets/icons/Icon-likes.svg";
import viewsIcon from "./assets/icons/Icon-views.svg";
import search from "../src/assets/icons/Icon-search.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <>
        <BrowserRouter>
          <Header search={this.state.search} />
          <Switch>
            <Route exact path="/" component={Hero} poster={this.state.poster} />
          </Switch>
          <div className="desktop">
            <div className="desktop__left">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(routerProps) => {
                    return (
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
                    );
                  }}
                />
                <Route exact path="/" component={CommentsForm} />
                <Route
                  exact
                  path="/"
                  component={Comments}
                  commentsArr={this.state.comments[0].comments}
                />
              </Switch>
            </div>
            <div className="desktop__right">
              <h3 className="video-sec">Next Vide</h3>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(routerProps) => {
                    return (
                      <Video
                        videosArr={this.state.comments}
                        clickHandle={this.clickVideo}
                        posterVideo={this.state.poster}
                        filteredVideos={this.filteredVideo}
                      />
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
